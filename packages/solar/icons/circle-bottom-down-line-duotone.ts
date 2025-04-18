import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarCircleBottomDownLineDuotoneIcon],svg[solar-circle-bottom-down-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m10 14l-8 8m0 0h6m-6 0v-6"></svg:path><svg:path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12" opacity=".5"></svg:path></svg:g>`,
})
export class SolarCircleBottomDownLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
