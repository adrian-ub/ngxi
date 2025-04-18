import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarUserBlockLineDuotoneIcon],svg[solar-user-block-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="6" r="4"></svg:circle><svg:path d="M15 13.327A13.6 13.6 0 0 0 12 13c-4.418 0-8 2.015-8 4.5S4 22 12 22c5.687 0 7.331-1.018 7.807-2.5" opacity=".5"></svg:path><svg:path stroke-linejoin="round" d="M15.172 18.828a4 4 0 1 0 5.657-5.657m-5.658 5.657a4 4 0 0 1 5.657-5.657m-5.656 5.657l5.656-5.656"></svg:path></svg:g>`,
})
export class SolarUserBlockLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
