import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlinePaypalIcon],svg[icon-park-outline-paypal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M33.031 28C39 28 43 25.5 43 20s-4-8-9.969-8H22l-5 31h9l2-15z" clip-rule="evenodd"></svg:path><svg:path d="M18 36h-8l5-31h11.031C32 5 36 7.5 36 13s-4 8-9.969 8H21"></svg:path></svg:g>`,
})
export class IconParkOutlinePaypalIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
