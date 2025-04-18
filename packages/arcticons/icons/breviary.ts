import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBreviaryIcon],svg[arcticons-breviary-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.34 42.68a21.48 21.48 0 1 1 6.29 2.37"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.63 45.05L26 28.19l10.54 4l2.37-6.29l-10.55-4l3.9-10.36l-6.3-2.37L22 19.53l-10.54-4l-2.33 6.33l10.54 4l-6.33 16.82"></svg:path>`,
})
export class ArcticonsBreviaryIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
