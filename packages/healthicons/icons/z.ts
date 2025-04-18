import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsZIcon],svg[healthicons-z-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M29.73 14H14a2 2 0 0 1 0-4h20a2 2 0 0 1 1.536 3.28L18.27 34H34a2 2 0 1 1 0 4H14a2 2 0 0 1-1.536-3.28z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsZIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
