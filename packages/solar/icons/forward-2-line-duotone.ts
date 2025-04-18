import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarForward2LineDuotoneIcon],svg[solar-forward-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m14.5 17l5-5l-5-5"></svg:path><svg:path d="M19.5 12h-10c-1.667 0-5-1-5-5" opacity=".5"></svg:path></svg:g>`,
})
export class SolarForward2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
