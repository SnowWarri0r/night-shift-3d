import{S as e,ar as t,bt as n,l as r,t as i,zn as a}from"./night-DFioy71t.js";import{t as o}from"./index-D7dhTRSS.js";import{n as s,r as c,t as l}from"./horde3d-DwANM7u6.js";var u=12,d=new t(-.45,.8,.4).normalize(),f=.012,p=new e(.78,.92,1),m=class{base;night;scene;manifest=null;palette=null;hex=new Map;gltf=new Map;figures=new Map;loader=new s;rim;ghost;constructor(t,n,r){this.base=t,this.night=n,this.scene=r,this.rim=new a({side:1,uniforms:{...n,uColor:{value:new e(854804)},uWidth:{value:f}},vertexShader:`
        uniform float uWidth;
        varying float vDepth;
        void main() {
          vec4 mv = modelViewMatrix * vec4(position + normal * uWidth, 1.0);
          vDepth = -mv.z;
          gl_Position = projectionMatrix * mv;
        }`,fragmentShader:`
        ${i}
        uniform vec3 uColor;
        varying float vDepth;
        void main() { gl_FragColor = vec4(mix(uColor, uFogColor, fogFactor(vDepth)), 1.0); }`}),this.ghost=new a({depthFunc:6,depthWrite:!1,uniforms:{uColor:{value:p}},vertexShader:`void main() { gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`uniform vec3 uColor; void main() { gl_FragColor = vec4(uColor, 1.0); }`}),this.start()}async start(){try{let[t,n]=await Promise.all([fetch(this.base+`models/models.json`).then(e=>e.json()),fetch(this.base+`sprites/palette.json`).then(e=>e.json())]);this.palette=n;for(let t of this.palette.colors)this.hex.set(t.name,new e(t.hex));this.manifest=t}catch{}}get(e){let t=this.gltf.get(e);return t===void 0&&this.manifest?.models.includes(e)&&(this.gltf.set(e,`loading`),this.loader.loadAsync(`${this.base}models/${e}.glb`).then(t=>this.gltf.set(e,t),()=>this.gltf.set(e,`failed`))),t&&t!==`loading`&&t!==`failed`?t:null}parse(e){let t=this.manifest;if(!t)return null;let n=/^look_(.+)_([a-z]+)$/.exec(e);if(n&&t.models.includes(`look_${n[1]}`)){let e=n[2];return{model:`look_${n[1]}`,weapon:e,prefix:`${t.holds[e]??`pistol`}.`}}return t.models.includes(e)?{model:e,weapon:``,prefix:``}:null}material(t,n){let r=this.palette,o=n.get(t)?.map(t=>new e(t))??(r.ramps[t]??[`outline`,`outline`,`outline`]).map(t=>this.hex.get(t)??new e(1,0,1));return new a({uniforms:{...this.night,uDark:{value:o[0]},uMid:{value:o[1]},uLight:{value:o[2]},uLightDir:{value:d},uFlat:{value:+!!r.emissive.includes(t)},uFlash:{value:0},uTint:{value:new e(1,1,1)}},vertexShader:`
        varying vec3 vN;
        varying vec3 vWorld;
        varying float vDepth;
        void main() {
          vN = normalize(mat3(modelMatrix) * normal);
          vec4 w = modelMatrix * vec4(position, 1.0);
          vWorld = w.xyz;
          vec4 mv = viewMatrix * w;
          vDepth = -mv.z;
          gl_Position = projectionMatrix * mv;
        }`,fragmentShader:`
        ${i}
        uniform vec3 uDark, uMid, uLight, uLightDir, uTint;
        uniform vec3 uSpriteAmbient;
        uniform float uMinLight, uFlat, uFlash;
        varying vec3 vN;
        varying vec3 vWorld;
        varying float vDepth;
        void main() {
          float l = dot(normalize(vN), uLightDir);
          vec3 c = uFlat > 0.5 ? uMid : l > 0.55 ? uLight : l > -0.05 ? uMid : uDark;
          vec3 light = uFlat > 0.5 ? vec3(1.0) : clamp(uSpriteAmbient + sampleLightMap(vWorld.xz), vec3(uMinLight), vec3(1.6));
          vec3 col = sightShade(c * uTint * light, vWorld.xz);
          col = mix(col, vec3(1.0), uFlash);
          gl_FragColor = vec4(mix(col, uFogColor, fogFactor(vDepth)), 1.0);
        }`})}make(e,t,n){let i=c(t.scene),a=o(n),s=[],l=new Map,u=[],d=[];i.traverse(e=>{e.isMesh&&d.push(e)});for(let e of d)this.dress(e,a,l,s,u);this.scene.add(i);let f=new r(i);return{model:e,root:i,mixer:f,clips:new Map(t.animations.map(e=>[e.name,f.clipAction(e)])),playing:null,weapon:``,gun:[],colours:n,mats:s,xray:u,seen:!0}}dress(e,t,r,i,a){let o=e.material.name,s=r.get(o);s||(s=this.material(o,t),r.set(o,s),i.push(s)),e.material=s,e.renderOrder=2,e.frustumCulled=!1;let c=new n(e.geometry,this.rim);c.renderOrder=2,c.frustumCulled=!1;let l=new n(e.geometry,this.ghost);l.renderOrder=1,l.frustumCulled=!1,e.add(c,l),a.push(l)}arm(e,t){for(let t of e.gun)t.removeFromParent();if(e.gun=[],e.weapon=t,!t)return!0;let n=this.get(`survivor_${t}`);if(!n)return e.weapon=``,!1;let r=`acc${t}`,i=[];n.scene.traverse(e=>{e.name.startsWith(r)&&!e.parent?.name.startsWith(r)&&i.push(e)});let a=new Map,s=o(e.colours);for(let t of i){let n=e.root.getObjectByName(t.parent?.name??``);if(!n)continue;let r=t.clone(!0),i=[];r.traverse(e=>{e.isMesh&&i.push(e)});for(let t of i)this.dress(t,s,a,e.mats,e.xray);n.add(r),e.gun.push(r)}return!0}pose(e,t,n,r,i,a,o,s,c,l,d,f){let p=this.parse(t),m=p&&this.get(p.model);if(!p||!m)return!1;let h=this.figures.get(e);h&&(h.model!==p.model||h.colours!==d)&&(this.drop(e),h=void 0),h||(h=this.make(p.model,m,d),this.figures.set(e,h)),h.weapon!==p.weapon&&this.arm(h,p.weapon);let g=h.clips.get(p.prefix+n)??h.clips.get(p.prefix+`idle`)??h.clips.get(n);g&&g!==h.playing&&(h.playing?.stop(),g.play(),g.paused=!0,h.playing=g),g&&(g.time=Math.min(g.getClip().duration,Math.max(0,r)/u)),h.mixer.update(0),h.root.position.set(i,a,o),h.root.rotation.y=s,h.root.visible=!0;for(let e of h.mats)e.uniforms.uFlash.value=c,e.uniforms.uTint.value.setRGB(l[0]/255,l[1]/255,l[2]/255);for(let e of h.xray)e.visible=f;return h.seen=!0,!0}endFrame(){for(let e of this.figures.values())e.seen||(e.root.visible=!1),e.seen=!1}drop(e){let t=this.figures.get(e);if(t){t.root.removeFromParent();for(let e of t.mats)e.dispose();this.figures.delete(e)}}clear(){for(let e of[...this.figures.keys()])this.drop(e)}};export{l as HordeModels,m as ModelCast};