import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsWheelchairAltIcon],svg[healthicons-wheelchair-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M16 33a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path><svg:path fill-rule="evenodd" d="M8 6h4.78l2.75 11H26a3 3 0 0 1 3 3v3h1a3 3 0 0 1 3 3v1.414l6.071 6.071l2.122-2.121l1.414 1.414l-3.536 3.536L33 30.243v5.928a3.001 3.001 0 1 1-2 0V29h-5.458A10 10 0 0 1 26 32c0 5.523-4.477 10-10 10S6 37.523 6 32c0-5.096 3.811-9.301 8.739-9.921L11.219 8H8zm19 17v-3a1 1 0 0 0-1-1h-9.97l.758 3.03a9.9 9.9 0 0 1 3.576.97zm-15 9a4 4 0 1 1 8 0a4 4 0 0 1-8 0m20 6a1 1 0 1 0 0 2a1 1 0 0 0 0-2" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsWheelchairAltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
