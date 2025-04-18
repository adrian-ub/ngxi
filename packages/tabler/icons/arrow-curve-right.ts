import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerArrowCurveRightIcon],svg[tabler-arrow-curve-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m10 7l4-4l4 4"></svg:path><svg:path d="M14 3v4.394A6.74 6.74 0 0 1 11 13a6.74 6.74 0 0 0-3 5.606V21"></svg:path></svg:g>`,
})
export class TablerArrowCurveRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
