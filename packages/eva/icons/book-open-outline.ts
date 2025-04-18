import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[evaBookOpenOutlineIcon],svg[eva-book-open-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.62 4.22a1 1 0 0 0-.84-.2L12 5.77L4.22 4A1 1 0 0 0 3 5v12.2a1 1 0 0 0 .78 1l8 1.8h.44l8-1.8a1 1 0 0 0 .78-1V5a1 1 0 0 0-.38-.78M5 6.25l6 1.35v10.15L5 16.4ZM19 16.4l-6 1.35V7.6l6-1.35Z"></svg:path>`,
})
export class EvaBookOpenOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
