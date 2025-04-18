import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsSquareMediumIcon],svg[healthicons-square-medium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 10a1 1 0 0 1 1-1h28a1 1 0 0 1 1 1v28a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1z"></svg:path>`,
})
export class HealthiconsSquareMediumIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
