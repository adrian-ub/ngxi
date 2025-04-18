import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirDoubleCheckIcon],svg[iconoir-double-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="m1.5 12.5l4.076 4.076a.6.6 0 0 0 .848 0L9 14m7-7l-4 4"></svg:path><svg:path d="m7 12l4.576 4.576a.6.6 0 0 0 .848 0L22 7"></svg:path></svg:g>`,
})
export class IconoirDoubleCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
