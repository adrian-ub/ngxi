import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsMapLineIcon],svg[majesticons-map-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M21.472 3.118A1 1 0 0 1 22 4v12a1 1 0 0 1-.445.832l-6 4a1 1 0 0 1-1.11 0L9 17.202l-5.445 3.63A1 1 0 0 1 2 20V8a1 1 0 0 1 .445-.832l6-4a1 1 0 0 1 1.11 0L15 6.798l5.445-3.63a1 1 0 0 1 1.027-.05zM14 8.535L10 5.87v9.596l4 2.666V8.535zm2 9.596l4-2.666V5.869l-4 2.666v9.596zm-8-2.666V5.869L4 8.535v9.596l4-2.666z"></svg:path></svg:g>`,
})
export class MajesticonsMapLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
