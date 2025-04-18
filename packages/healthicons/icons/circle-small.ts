import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsCircleSmallIcon],svg[healthicons-circle-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 36c6.627 0 12-5.373 12-12c0-6.628-5.373-12-12-12s-12 5.372-12 12c0 6.627 5.373 12 12 12"></svg:path>`,
})
export class HealthiconsCircleSmallIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
