import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phActivityIcon],svg[ph-activity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 216h-.4a8.1 8.1 0 0 1-7.1-5.2l-57.2-150l-32 70.5A8 8 0 0 1 56 136H24a8 8 0 0 1 0-16h26.8l37.9-83.3a8.2 8.2 0 0 1 7.6-4.7a8 8 0 0 1 7.2 5.2L161 188.1l31.8-63.7a8.2 8.2 0 0 1 7.2-4.4h32a8 8 0 0 1 0 16h-27.1l-37.7 75.6a8.2 8.2 0 0 1-7.2 4.4Z"></svg:path>`,
})
export class PhActivityIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
