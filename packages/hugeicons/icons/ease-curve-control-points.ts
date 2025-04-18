import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsEaseCurveControlPointsIcon],svg[hugeicons-ease-curve-control-points-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 4c-5 0-7.02 4.042-9 8s-4 8-9 8m7 0h2m3 0h2m0 0a2 2 0 1 0 4 0a2 2 0 0 0-4 0M12 4h2M7 4h2M7 4a2 2 0 1 1-4 0a2 2 0 0 1 4 0" color="currentColor"></svg:path>`,
})
export class HugeiconsEaseCurveControlPointsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
