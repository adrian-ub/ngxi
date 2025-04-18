import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignBookmarkIcon],svg[tdesign-bookmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3h16v19.943l-8-5.714l-8 5.714zm2 2v14.057l6-4.286l6 4.286V5z"></svg:path>`,
})
export class TdesignBookmarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
