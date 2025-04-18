import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteoconsRainIcon],svg[meteocons-rain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsRain0" viewBox="0 0 359 231"><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol><svg:symbol id="meteoconsRain1" viewBox="0 0 128 56"><svg:path fill="#0a5ad4" d="M8 56a8 8 0 0 1-8-8V8a8 8 0 0 1 16 0v40a8 8 0 0 1-8 8Z" opacity="0"><svg:animatetransform id="meteoconsRain2" additive="sum" attributeName="transform" begin="0s; x1.end+.33s" dur=".67s" type="translate" values="0 -60; 0 60"></svg:animatetransform><svg:animate id="meteoconsRain3" attributeName="opacity" begin="0s; y1.end+.33s" dur=".67s" keyTimes="0; .25; 1" values="0; 1; 0"></svg:animate></svg:path><svg:path fill="#0a5ad4" d="M64 56a8 8 0 0 1-8-8V8a8 8 0 0 1 16 0v40a8 8 0 0 1-8 8Z" opacity="0"><svg:animatetransform id="meteoconsRain4" additive="sum" attributeName="transform" begin=".33s; x2.end+.33s" dur=".67s" type="translate" values="0 -60; 0 60"></svg:animatetransform><svg:animate id="meteoconsRain5" attributeName="opacity" begin=".33s; y2.end+.33s" dur=".67s" keyTimes="0; .25; 1" values="0; 1; 0"></svg:animate></svg:path><svg:path fill="#0a5ad4" d="M120 56a8 8 0 0 1-8-8V8a8 8 0 0 1 16 0v40a8 8 0 0 1-8 8Z" opacity="0"><svg:animatetransform id="meteoconsRain6" additive="sum" attributeName="transform" begin="-.33s; x3.end+.33s" dur=".67s" type="translate" values="0 -60; 0 60"></svg:animatetransform><svg:animate id="meteoconsRain7" attributeName="opacity" begin="-.33s; y3.end+.33s" dur=".67s" keyTimes="0; .25; 1" values="0; 1; 0"></svg:animate></svg:path></svg:symbol></svg:defs><svg:use width="359" height="231" href="#meteoconsRain0" transform="translate(76.5 140.5)"></svg:use><svg:use width="128" height="56" href="#meteoconsRain1" transform="translate(192 344)"></svg:use>`,
})
export class MeteoconsRainIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
