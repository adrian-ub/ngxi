import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsArduinodroidIcon],svg[arcticons-arduinodroid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.94 20.46a9.15 9.15 0 1 1 2 10c-3.76-4-4.25-9.41-7.72-12.92a9.14 9.14 0 1 0 0 12.92a9.2 9.2 0 0 0 2-2.9M16.07 24h-4.88m25.6 0h-4.88m2.44 2.43v-4.87"></svg:path>`,
})
export class ArcticonsArduinodroidIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
