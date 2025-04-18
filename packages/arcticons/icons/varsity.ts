import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsVarsityIcon],svg[arcticons-varsity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.4 4.5a2 2 0 0 1 2 2v19.1c0 6.88-10.398 17.9-16.4 17.9S7.6 32.48 7.6 25.6V6.5a2 2 0 0 1 2-2z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.4 12.6L24 35.4l-7.4-22.8"></svg:path>`,
})
export class ArcticonsVarsityIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
