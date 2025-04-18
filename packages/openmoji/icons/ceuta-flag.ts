import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiCeutaFlagIcon],svg[openmoji-ceuta-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" d="M5 17h62v38H5z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width=".1" d="m5 17l31 19V17zm31 19l31-19v19zm0 0l31 19H36zM5 36h31L5 55z"></svg:path><svg:path fill="#fff" stroke="#d22f27" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M31.63 34.08h8.784c0 10.31-2.035 10.34-4.416 10.34c-2.431 0-4.368.094-4.368-10.34"></svg:path><svg:path fill="none" stroke="#1e50a0" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M36 36.67v4.785"></svg:path><svg:path fill="none" stroke="#1e50a0" stroke-linecap="round" stroke-width="2" d="M34.18 39.06h3.632"></svg:path><svg:path fill="none" stroke="#f1b31c" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M30.96 31.45c3.306-.871 6.684-.904 10.14 0"></svg:path><svg:path fill="none" stroke="#f1b31c" stroke-linecap="round" stroke-width="2" d="M36 27.63v3.032m-6.43-1.622l1.396 2.911M42.5 29.04l-1.396 2.911"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path>`,
})
export class OpenmojiCeutaFlagIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
