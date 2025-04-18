import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteoconsSmokeParticlesFillIcon],svg[meteocons-smoke-particles-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="meteoconsSmokeParticlesFill0" x1="74" x2="98" y1="165.2" y2="206.8" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#b8bdc6"></svg:stop><svg:stop offset=".5" stop-color="#b8bdc6"></svg:stop><svg:stop offset="1" stop-color="#a5aab2"></svg:stop></svg:lineargradient><svg:symbol id="meteoconsSmokeParticlesFill1" viewBox="0 0 168 212"><svg:circle cx="86" cy="186" r="24" fill="url(#meteoconsSmokeParticlesFill0)" stroke="#afb4bc" stroke-miterlimit="10" stroke-width="4" opacity="0"><svg:animatetransform id="meteoconsSmokeParticlesFill2" additive="sum" attributeName="transform" begin="0s; x1.end+.75s" dur="2.25s" type="translate" values="0 0; -58 -118"></svg:animatetransform><svg:animate id="meteoconsSmokeParticlesFill3" attributeName="r" begin="0s; y1.end+.75s" dur="2.25s" values="24; 36"></svg:animate><svg:animate id="meteoconsSmokeParticlesFill4" attributeName="opacity" begin="0s; y1.end+.75s" dur="2.25s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:circle><svg:circle cx="86" cy="186" r="24" fill="url(#meteoconsSmokeParticlesFill0)" stroke="#afb4bc" stroke-miterlimit="10" stroke-width="4" opacity="0"><svg:animatetransform id="meteoconsSmokeParticlesFill5" additive="sum" attributeName="transform" begin=".83s; x2.end+.75s" dur="2.25s" type="translate" values="0 0; 58 -118"></svg:animatetransform><svg:animate id="meteoconsSmokeParticlesFill6" attributeName="r" begin=".83s; y2.end+.75s" dur="2.25s" values="24; 36"></svg:animate><svg:animate id="meteoconsSmokeParticlesFill7" attributeName="opacity" begin=".83s; z2.end+.75s" dur="2.25s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:circle><svg:circle cx="86" cy="186" r="24" fill="url(#meteoconsSmokeParticlesFill0)" stroke="#afb4bc" stroke-miterlimit="10" stroke-width="4" opacity="0"><svg:animatetransform id="meteoconsSmokeParticlesFill8" additive="sum" attributeName="transform" begin="1.66s; x3.end+.75s" dur="2.25s" type="translate" values="0 0; 0 -118"></svg:animatetransform><svg:animate id="meteoconsSmokeParticlesFill9" attributeName="r" begin="1.66s; y3.end+.75s" dur="2.25s" values="24; 36"></svg:animate><svg:animate id="meteoconsSmokeParticlesFilla" attributeName="opacity" begin="1.66s; z3.end+.75s" dur="2.25s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0"></svg:animate></svg:circle></svg:symbol></svg:defs><svg:use width="168" height="212" href="#meteoconsSmokeParticlesFill1" transform="translate(172 150)"></svg:use>`,
})
export class MeteoconsSmokeParticlesFillIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
