import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feBookmarkIcon],svg[fe-bookmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 4H6v14.764l6-3l6 3zM6 2h12a2 2 0 0 1 2 2v18l-8-4l-8 4V4a2 2 0 0 1 2-2m8 4h2v6h-2z"></svg:path>`,
})
export class FeBookmarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
