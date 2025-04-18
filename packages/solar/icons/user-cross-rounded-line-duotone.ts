import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarUserCrossRoundedLineDuotoneIcon],svg[solar-user-cross-rounded-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="6" r="4"></svg:circle><svg:path d="M14 20.834c-.634.108-1.305.166-2 .166c-3.866 0-7-1.79-7-4s3.134-4 7-4c1.713 0 3.283.352 4.5.936" opacity=".5"></svg:path><svg:circle cx="17" cy="18" r="4"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="m15.667 16.667l2.666 2.666m0-2.666l-2.666 2.666"></svg:path></svg:g>`,
})
export class SolarUserCrossRoundedLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
