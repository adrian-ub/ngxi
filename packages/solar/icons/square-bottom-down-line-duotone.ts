import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarSquareBottomDownLineDuotoneIcon],svg[solar-square-bottom-down-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M13 22c4.055-.008 6.178-.107 7.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.071 2 16.714 2 12 2S4.929 2 3.464 3.464C2.107 4.822 2.008 6.944 2 11" opacity=".5"></svg:path><svg:path stroke-linejoin="round" d="m11 13l-8 8m0 0h6m-6 0v-6"></svg:path></svg:g>`,
})
export class SolarSquareBottomDownLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
