import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesBookmarkedSolidIcon],svg[bubbles-bookmarked-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.012 11.659h3a.333.333 0 0 1 .333.333v3a.94.94 0 0 0 .55.947c.1.04.209.061.318.061a1.03 1.03 0 0 0 .738-.344l9.661-9.661a1.334 1.334 0 0 0 0-1.884L11.89.39a1.32 1.32 0 0 0-.942-.39a1.32 1.32 0 0 0-.941.39L.345 10.05a.94.94 0 0 0-.281 1.059a.94.94 0 0 0 .948.55"></svg:path>`,
})
export class BubblesBookmarkedSolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
