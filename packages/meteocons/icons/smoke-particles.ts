import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteoconsSmokeParticlesIcon],svg[meteocons-smoke-particles-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsSmokeParticles0" viewBox="0 0 173 217"><svg:circle cx="88.5" cy="188.5" r="24" fill="none" stroke="#afb4bc" stroke-miterlimit="10" stroke-width="9" opacity="0"><svg:animatetransform id="meteoconsSmokeParticles1" additive="sum" attributeName="transform" begin="0s; x1.end+.75s" dur="2.25s" type="translate" values="0 0; -58 -118"></svg:animatetransform><svg:animate id="meteoconsSmokeParticles2" attributeName="r" begin="0s; y1.end+.75s" dur="2.25s" values="24; 36"></svg:animate><svg:animate id="meteoconsSmokeParticles3" attributeName="opacity" begin="0s; y1.end+.75s" dur="2.25s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:circle><svg:circle cx="88.5" cy="188.5" r="24" fill="none" stroke="#afb4bc" stroke-miterlimit="10" stroke-width="9" opacity="0"><svg:animatetransform id="meteoconsSmokeParticles4" additive="sum" attributeName="transform" begin=".83s; x2.end+.75s" dur="2.25s" type="translate" values="0 0; 58 -118"></svg:animatetransform><svg:animate id="meteoconsSmokeParticles5" attributeName="r" begin=".83s; y2.end+.75s" dur="2.25s" values="24; 36"></svg:animate><svg:animate id="meteoconsSmokeParticles6" attributeName="opacity" begin=".83s; z2.end+.75s" dur="2.25s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:circle><svg:circle cx="88.5" cy="188.5" r="24" fill="none" stroke="#afb4bc" stroke-miterlimit="10" stroke-width="9" opacity="0"><svg:animatetransform id="meteoconsSmokeParticles7" additive="sum" attributeName="transform" begin="1.66s; x3.end+.75s" dur="2.25s" type="translate" values="0 0; 0 -118"></svg:animatetransform><svg:animate id="meteoconsSmokeParticles8" attributeName="r" begin="1.66s; y3.end+.75s" dur="2.25s" values="24; 36"></svg:animate><svg:animate id="meteoconsSmokeParticles9" attributeName="opacity" begin="1.66s; z3.end+.75s" dur="2.25s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:circle></svg:symbol></svg:defs><svg:use width="173" height="217" href="#meteoconsSmokeParticles0" transform="translate(169.5 147.5)"></svg:use>`,
})
export class MeteoconsSmokeParticlesIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
