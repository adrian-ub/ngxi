import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarCode2LineDuotoneIcon],svg[solar-code-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="m16 11l1.697 1.527c1.542 1.388 2.313 2.082 2.313 2.973c0 .89-.771 1.585-2.314 2.973L16 20"></svg:path><svg:path d="M13.987 5L10 20" opacity=".5"></svg:path><svg:path d="M8 4.83L6.304 6.356C4.76 7.745 3.99 8.44 3.99 9.33s.771 1.585 2.314 2.973L8 13.83"></svg:path></svg:g>`,
})
export class SolarCode2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
