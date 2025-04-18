import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsMapSimpleIcon],svg[majesticons-map-simple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M9 4L3 8v12l6-4l6 4l6-4V4l-6 4z"></svg:path><svg:path fill-rule="evenodd" d="M21.472 3.118A1 1 0 0 1 22 4v12a1 1 0 0 1-.445.832l-6 4a1 1 0 0 1-1.11 0L9 17.202l-5.445 3.63A1 1 0 0 1 2 20V8a1 1 0 0 1 .445-.832l6-4a1 1 0 0 1 1.11 0L15 6.798l5.445-3.63a1 1 0 0 1 1.027-.05M4 8.535v9.596l4.445-2.963a1 1 0 0 1 1.11 0L15 18.798l5-3.333V5.869l-4.445 2.963a1 1 0 0 1-1.11 0L9 5.202z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class MajesticonsMapSimpleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
