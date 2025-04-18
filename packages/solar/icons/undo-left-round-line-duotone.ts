import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarUndoLeftRoundLineDuotoneIcon],svg[solar-undo-left-round-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M7 4L4 7l3 3"></svg:path><svg:path d="M4 7h11a5 5 0 0 1 0 10H8" opacity=".5"></svg:path></svg:g>`,
})
export class SolarUndoLeftRoundLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
