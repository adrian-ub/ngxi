import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteoconsHailIcon],svg[meteocons-hail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsHail0" viewBox="0 0 359 231"><svg:path fill="none" stroke="#e2e8f0" stroke-linecap="round" stroke-linejoin="round" stroke-width="15" d="M295.5 223.5a56 56 0 0 0 0-112l-2.5.1a83.9 83.9 0 0 0-153-64.2a56 56 0 0 0-84.6 48.1a56.6 56.6 0 0 0 .8 9a60 60 0 0 0 11.2 119"></svg:path></svg:symbol><svg:symbol id="meteoconsHail1" viewBox="0 0 136 24"><svg:path fill="#86c3db" d="M12 0a12 12 0 1 0 12 12A12 12 0 0 0 12 0Z" opacity="0"><svg:animatetransform id="meteoconsHail2" additive="sum" attributeName="transform" begin="0s; x1.end+.42s" dur=".58s" keyTimes="0; .71; 1" type="translate" values="0 -46; 0 86; -18 74"></svg:animatetransform><svg:animate id="meteoconsHail3" attributeName="opacity" begin="0s; y1.end+.42s" dur=".58s" keyTimes="0; .14; .71; 1" values="0; 1; 1; 0"></svg:animate></svg:path><svg:path fill="#86c3db" d="M68 0a12 12 0 1 0 12 12A12 12 0 0 0 68 0Z" opacity="0"><svg:animatetransform id="meteoconsHail4" additive="sum" attributeName="transform" begin=".67s; x2.end+.42s" dur=".58s" keyTimes="0; .71; 1" type="translate" values="0 -46; 0 86; 0 74"></svg:animatetransform><svg:animate id="meteoconsHail5" attributeName="opacity" begin=".67s; y2.end+.42s" dur=".58s" keyTimes="0; .14; .71; 1" values="0; 1; 1; 0"></svg:animate></svg:path><svg:path fill="#86c3db" d="M124 0a12 12 0 1 0 12 12a12 12 0 0 0-12-12Z" opacity="0"><svg:animatetransform id="meteoconsHail6" additive="sum" attributeName="transform" begin=".33s; x3.end+.42s" dur=".58s" keyTimes="0; .71; 1" type="translate" values="0 -46; 0 86; 18 74"></svg:animatetransform><svg:animate id="meteoconsHail7" attributeName="opacity" begin=".33s; y3.end+.42s" dur=".58s" keyTimes="0; .14; .71; 1" values="0; 1; 1; 0"></svg:animate></svg:path></svg:symbol></svg:defs><svg:use width="359" height="231" href="#meteoconsHail0" transform="translate(76.5 140.5)"></svg:use><svg:use width="136" height="24" href="#meteoconsHail1" transform="translate(188 350)"></svg:use>`,
})
export class MeteoconsHailIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
