import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarTuningLineDuotoneIcon],svg[solar-tuning-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M10 9.5a3 3 0 1 1-6 0a3 3 0 0 1 6 0Zm10 5a3 3 0 1 0-6 0a3 3 0 0 0 6 0Z"></svg:path><svg:path stroke-linecap="round" d="m17 11l.041-9M7 2v4m0 7v9m10 0v-4" opacity=".5"></svg:path></svg:g>`,
})
export class SolarTuningLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
