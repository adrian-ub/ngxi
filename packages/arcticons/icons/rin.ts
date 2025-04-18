import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRinIcon],svg[arcticons-rin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.928 12.895h34.144m-17.072 0V5.5m10.3 7.395c-2.087 20.742-23.367 29.489-23.367 29.489"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.666 19.284C19.02 34.394 36.843 42.5 36.843 42.5"></svg:path>`,
})
export class ArcticonsRinIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
