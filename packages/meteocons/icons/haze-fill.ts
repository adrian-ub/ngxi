import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteoconsHazeFillIcon],svg[meteocons-haze-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="meteoconsHazeFill0" x1="99.5" x2="232.6" y1="30.7" y2="261.4" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#f3f7fe"></svg:stop><svg:stop offset=".5" stop-color="#f3f7fe"></svg:stop><svg:stop offset="1" stop-color="#deeafb"></svg:stop></svg:lineargradient><svg:lineargradient id="meteoconsHazeFill1" x1="17.3" x2="89.3" y1="43.1" y2="167.8" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#d4d7dd"></svg:stop><svg:stop offset=".5" stop-color="#d4d7dd"></svg:stop><svg:stop offset="1" stop-color="#bec1c6"></svg:stop></svg:lineargradient><svg:lineargradient id="meteoconsHazeFill2" x1="107.3" x2="179.3" y1="-8.8" y2="115.9" href="#meteoconsHazeFill1"></svg:lineargradient><svg:lineargradient id="meteoconsHazeFill3" x1="174.8" x2="246.8" y1="-47.8" y2="76.9" href="#meteoconsHazeFill1"></svg:lineargradient><svg:lineargradient id="meteoconsHazeFill4" x2="89.3" y1="-4.9" y2="119.8" href="#meteoconsHazeFill1"></svg:lineargradient><svg:lineargradient id="meteoconsHazeFill5" x1="107.3" x2="179.3" y1="-56.9" y2="67.9" href="#meteoconsHazeFill1"></svg:lineargradient><svg:lineargradient id="meteoconsHazeFill6" x1="174.8" x2="246.8" y1="-95.8" y2="28.9" href="#meteoconsHazeFill1"></svg:lineargradient><svg:symbol id="meteoconsHazeFill7" viewBox="0 0 350 222"><svg:path fill="url(#meteoconsHazeFill0)" stroke="#e6effc" stroke-miterlimit="10" stroke-width="6" d="m291 107l-2.5.1A83.9 83.9 0 0 0 135.6 43A56 56 0 0 0 51 91a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 63 219l4-.2v.2h224a56 56 0 0 0 0-112Z"></svg:path></svg:symbol><svg:symbol id="meteoconsHazeFill8" viewBox="0 0 264 72"><svg:g><svg:path fill="none" stroke="url(#meteoconsHazeFill1)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="24" d="M12 60h30"></svg:path><svg:path fill="none" stroke="url(#meteoconsHazeFill2)" stroke-dasharray="60 60" stroke-linecap="round" stroke-miterlimit="10" stroke-width="24" d="M102 60h90"></svg:path><svg:path fill="none" stroke="url(#meteoconsHazeFill3)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="24" d="M222 60h30"></svg:path><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-24 0; 24 0; -24 0"></svg:animatetransform></svg:g><svg:g><svg:path fill="none" stroke="url(#meteoconsHazeFill4)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="24" d="M12 12h30"></svg:path><svg:path fill="none" stroke="url(#meteoconsHazeFill5)" stroke-dasharray="60 60" stroke-linecap="round" stroke-miterlimit="10" stroke-width="24" d="M102 12h90"></svg:path><svg:path fill="none" stroke="url(#meteoconsHazeFill6)" stroke-linecap="round" stroke-miterlimit="10" stroke-width="24" d="M222 12h30"></svg:path><svg:animatetransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="24 0; -24 0; 24 0"></svg:animatetransform></svg:g></svg:symbol></svg:defs><svg:use width="350" height="222" href="#meteoconsHazeFill7" transform="translate(81 145)"></svg:use><svg:use width="264" height="72" href="#meteoconsHazeFill8" transform="translate(124 402)"></svg:use>`,
})
export class MeteoconsHazeFillIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
