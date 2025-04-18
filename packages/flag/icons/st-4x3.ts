import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagSt4x3Icon],svg[flag-st-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#12ad2b" d="M0 0h640v480H0z"></svg:path><svg:path fill="#ffce00" d="M0 137.1h640V343H0z"></svg:path><svg:path fill="#d21034" d="M0 0v480l240-240"></svg:path><svg:g id="flagSt4x30" transform="translate(351.6 240)scale(.34286)"><svg:g id="flagSt4x31"><svg:path id="flagSt4x32" fill="#000001" d="M0-200V0h100" transform="rotate(18 0 -200)"></svg:path><svg:use width="100%" height="100%" href="#flagSt4x32" transform="scale(-1 1)"></svg:use></svg:g><svg:use width="100%" height="100%" href="#flagSt4x31" transform="rotate(72)"></svg:use><svg:use width="100%" height="100%" href="#flagSt4x31" transform="rotate(144)"></svg:use><svg:use width="100%" height="100%" href="#flagSt4x31" transform="rotate(-144)"></svg:use><svg:use width="100%" height="100%" href="#flagSt4x31" transform="rotate(-72)"></svg:use></svg:g><svg:use width="100%" height="100%" x="700" href="#flagSt4x30" transform="translate(-523.2)"></svg:use>`,
})
export class FlagSt4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
