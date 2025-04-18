import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteoconsDrizzleIcon],svg[meteocons-drizzle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsDrizzle0" viewBox="0 0 359 231"><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol></svg:defs><svg:use width="359" height="231" href="#meteoconsDrizzle0" transform="translate(76.5 140.5)"></svg:use><svg:path fill="#0a5ad4" d="M200 376a8 8 0 0 1-8-8v-12a8 8 0 0 1 16 0v12a8 8 0 0 1-8 8Z" opacity="0"><svg:animatetransform id="meteoconsDrizzle1" additive="sum" attributeName="transform" begin="0s; x1.end+1s" dur="1s" keyTimes="0; .25; 1" type="translate" values="0 -32; 0 -32; 0 120;"></svg:animatetransform><svg:animate id="meteoconsDrizzle2" attributeName="opacity" begin="0s; y1.end+1s" dur="1s" keyTimes="0; .25; 1" values="0; 1; 0"></svg:animate></svg:path><svg:path fill="#0a5ad4" d="M256 376a8 8 0 0 1-8-8v-12a8 8 0 0 1 16 0v12a8 8 0 0 1-8 8Z" opacity="0"><svg:animatetransform id="meteoconsDrizzle3" additive="sum" attributeName="transform" begin="1.34s; x2.end+1s" dur="1s" keyTimes="0; .25; 1" type="translate" values="0 -32; 0 -32; 0 120;"></svg:animatetransform><svg:animate id="meteoconsDrizzle4" attributeName="opacity" begin="1.34s; y2.end+1s" dur="1s" keyTimes="0; .25; 1" values="0; 1; 0"></svg:animate></svg:path><svg:path fill="#0a5ad4" d="M312 376a8 8 0 0 1-8-8v-12a8 8 0 0 1 16 0v12a8 8 0 0 1-8 8Z" opacity="0"><svg:animatetransform id="meteoconsDrizzle5" additive="sum" attributeName="transform" begin=".67s; x3.end+1s" dur="1s" keyTimes="0; .25; 1" type="translate" values="0 -32; 0 -32; 0 120;"></svg:animatetransform><svg:animate id="meteoconsDrizzle6" attributeName="opacity" begin=".67s; y3.end+1s" dur="1s" keyTimes="0; .25; 1" values="0; 1; 0"></svg:animate></svg:path>`,
})
export class MeteoconsDrizzleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
