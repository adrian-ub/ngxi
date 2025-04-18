import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSlideEraser20RegularIcon],svg[fluent-slide-eraser-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h6c0-.343.078-.686.234-1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v4.235c.213.106.413.248.59.425l.41.41V6a2 2 0 0 0-2-2zm11.116 7.366a1.25 1.25 0 0 1 1.767 0l1.75 1.75a1.25 1.25 0 0 1 0 1.768l-2.575 2.575l-3.518-3.517zm-3.174 3.174l-.576.576a1.25 1.25 0 0 0 0 1.768l1.75 1.749a1.25 1.25 0 0 0 1.767 0l.577-.576z"></svg:path>`,
})
export class FluentSlideEraser20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
