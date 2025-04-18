import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsHeartIcon],svg[healthicons-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 18.724C6 12.641 10.036 7 15.563 7c3.835 0 6.68 2.53 8.437 6.121C25.756 9.531 28.602 7 32.438 7C37.965 7 42 12.642 42 18.724C42 31.744 24 41 24 41S6 32.304 6 18.724"></svg:path>`,
})
export class HealthiconsHeartIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
