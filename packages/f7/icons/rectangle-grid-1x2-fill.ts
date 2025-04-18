import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7RectangleGrid1x2FillIcon],svg[f7-rectangle-grid-1x2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.066 26.066h39.867c3.587 0 5.391-1.757 5.391-5.367v-8.953c0-3.586-1.804-5.32-5.39-5.32H8.065c-3.586 0-5.39 1.734-5.39 5.32V20.7c0 3.61 1.804 5.367 5.39 5.367m0 23.508h39.867c3.587 0 5.391-1.734 5.391-5.343v-8.977c0-3.563-1.804-5.32-5.39-5.32H8.065c-3.586 0-5.39 1.757-5.39 5.32v8.977c0 3.609 1.804 5.343 5.39 5.343"></svg:path>`,
})
export class F7RectangleGrid1x2FillIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
