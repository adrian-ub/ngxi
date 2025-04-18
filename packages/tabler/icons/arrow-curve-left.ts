import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerArrowCurveLeftIcon],svg[tabler-arrow-curve-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m14 7l-4-4l-4 4"></svg:path><svg:path d="M10 3v4.394A6.74 6.74 0 0 0 13 13a6.74 6.74 0 0 1 3 5.606V21"></svg:path></svg:g>`,
})
export class TablerArrowCurveLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
