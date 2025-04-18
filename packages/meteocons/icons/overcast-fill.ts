import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteoconsOvercastFillIcon],svg[meteocons-overcast-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="meteoconsOvercastFill0" viewBox="0 0 200.3 126.1"><svg:path fill="url(#meteoconsOvercastFill4)" stroke="#848b98" stroke-miterlimit="10" d="M.5 93.2a32.4 32.4 0 0 0 32.4 32.4h129.8v-.1l2.3.1a34.8 34.8 0 0 0 6.5-68.9a32.4 32.4 0 0 0-48.5-33a48.6 48.6 0 0 0-88.6 37.1h-1.5A32.4 32.4 0 0 0 .5 93.1Z"></svg:path></svg:symbol><svg:symbol id="meteoconsOvercastFill1" viewBox="0 0 350 222"><svg:path fill="url(#meteoconsOvercastFill3)" stroke="#e6effc" stroke-miterlimit="10" stroke-width="6" d="m291 107l-2.5.1A83.9 83.9 0 0 0 135.6 43A56 56 0 0 0 51 91a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 63 219l4-.2v.2h224a56 56 0 0 0 0-112Z"></svg:path></svg:symbol><svg:symbol id="meteoconsOvercastFill2" viewBox="0 0 398 222"><svg:use width="200.3" height="126.1" href="#meteoconsOvercastFill0" transform="translate(198 27)"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-9 0; 9 0; -9 0"></svg:animatetransform></svg:use><svg:use width="350" height="222" href="#meteoconsOvercastFill1"><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></svg:animatetransform></svg:use></svg:symbol><svg:lineargradient id="meteoconsOvercastFill3" x1="99.5" x2="232.6" y1="30.7" y2="261.4" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#f3f7fe"></svg:stop><svg:stop offset=".5" stop-color="#f3f7fe"></svg:stop><svg:stop offset="1" stop-color="#deeafb"></svg:stop></svg:lineargradient><svg:lineargradient id="meteoconsOvercastFill4" x1="52.7" x2="133.4" y1="9.6" y2="149.3" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#9ca3af"></svg:stop><svg:stop offset=".5" stop-color="#9ca3af"></svg:stop><svg:stop offset="1" stop-color="#6b7280"></svg:stop></svg:lineargradient></svg:defs><svg:use width="398" height="222" href="#meteoconsOvercastFill2" transform="translate(68.84 145)"></svg:use>`,
})
export class MeteoconsOvercastFillIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
