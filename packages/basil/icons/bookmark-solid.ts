import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[basilBookmarkSolidIcon],svg[basil-bookmark-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.13 3.186a25 25 0 0 0-8.26 0A2.44 2.44 0 0 0 5.877 5.11a36.9 36.9 0 0 0-.148 13.795l.334 1.86a.732.732 0 0 0 1.224.4l4.023-3.822a1 1 0 0 1 1.378 0l4.023 3.822a.732.732 0 0 0 1.224-.4l.334-1.86a36.9 36.9 0 0 0-.148-13.795a2.44 2.44 0 0 0-1.991-1.925"></svg:path>`,
})
export class BasilBookmarkSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
