import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagCn4x3Icon],svg[flag-cn-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="flagCn4x30" fill="#ff0" d="M-.6.8L0-1L.6.8L-1-.3h2z"></svg:path></svg:defs><svg:path fill="#ee1c25" d="M0 0h640v480H0z"></svg:path><svg:use width="30" height="20" href="#flagCn4x30" transform="matrix(71.9991 0 0 72 120 120)"></svg:use><svg:use width="30" height="20" href="#flagCn4x30" transform="matrix(-12.33562 -20.5871 20.58684 -12.33577 240.3 48)"></svg:use><svg:use width="30" height="20" href="#flagCn4x30" transform="matrix(-3.38573 -23.75998 23.75968 -3.38578 288 95.8)"></svg:use><svg:use width="30" height="20" href="#flagCn4x30" transform="matrix(6.5991 -23.0749 23.0746 6.59919 288 168)"></svg:use><svg:use width="30" height="20" href="#flagCn4x30" transform="matrix(14.9991 -18.73557 18.73533 14.99929 240 216)"></svg:use>`,
})
export class FlagCn4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
