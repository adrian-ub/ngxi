import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarTuning2LineDuotoneIcon],svg[solar-tuning-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M9.5 14a3 3 0 1 1 0 6a3 3 0 0 1 0-6Zm5-10a3 3 0 1 0 0 6a3 3 0 0 0 0-6Z"></svg:path><svg:path stroke-linecap="round" d="M13 17h9M11 7l-9-.042M2 17h4M22 7h-4" opacity=".5"></svg:path></svg:g>`,
})
export class SolarTuning2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
