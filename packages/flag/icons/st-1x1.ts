import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagSt1x1Icon],svg[flag-st-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#12ad2b" d="M0 0h512v512H0z"></svg:path><svg:path fill="#ffce00" d="M0 146.3h512v219.4H0z"></svg:path><svg:path fill="#d21034" d="M0 0v512l192-256"></svg:path><svg:g id="flagSt1x10" transform="translate(276.9 261.5)scale(.33167)"><svg:g id="flagSt1x11"><svg:path id="flagSt1x12" fill="#000001" d="M0-200V0h100" transform="rotate(18 0 -200)"></svg:path><svg:use width="100%" height="100%" href="#flagSt1x12" transform="scale(-1 1)"></svg:use></svg:g><svg:use width="100%" height="100%" href="#flagSt1x11" transform="rotate(72)"></svg:use><svg:use width="100%" height="100%" href="#flagSt1x11" transform="rotate(144)"></svg:use><svg:use width="100%" height="100%" href="#flagSt1x11" transform="rotate(-144)"></svg:use><svg:use width="100%" height="100%" href="#flagSt1x11" transform="rotate(-72)"></svg:use></svg:g><svg:use width="100%" height="100%" x="700" href="#flagSt1x10" transform="translate(-550.9)"></svg:use>`,
})
export class FlagSt1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
