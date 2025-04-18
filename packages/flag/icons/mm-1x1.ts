import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagMm1x1Icon],svg[flag-mm-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fecb00" d="M0 0h512v512H0z"></svg:path><svg:path fill="#34b233" d="M0 170.7h512V512H0z"></svg:path><svg:path fill="#ea2839" d="M0 341.3h512V512H0z"></svg:path><svg:path id="flagMm1x10" fill="#fff" stroke-width="188.7" d="M312.6 274H199.4L256 85.3Z"></svg:path><svg:use width="100%" height="100%" href="#flagMm1x10" transform="rotate(-144 256 274)"></svg:use><svg:use width="100%" height="100%" href="#flagMm1x10" transform="rotate(-72 256 274)"></svg:use><svg:use width="100%" height="100%" href="#flagMm1x10" transform="rotate(72 256 274)"></svg:use><svg:use width="100%" height="100%" href="#flagMm1x10" transform="rotate(144 256 274)"></svg:use>`,
})
export class FlagMm1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
