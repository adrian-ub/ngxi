import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSoftwareUpdateIcon],svg[arcticons-software-update-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.401 4h18.124a3.01 3.01 0 0 1 3.02 3v33c0 1.657-1.352 3-3.02 3H15.4a3.01 3.01 0 0 1-3.02-3V7c0-1.657 1.352-3 3.02-3m9.063 26.272V14.964"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m29.922 20.142l-5.46-5.178l-5.458 5.178"></svg:path>`,
})
export class ArcticonsSoftwareUpdateIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
