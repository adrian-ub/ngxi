import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineMaskTwoIcon],svg[icon-park-outline-mask-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:circle cx="24" cy="24" r="20"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M31 5.26C23.407 8.096 18 15.416 18 24s5.407 15.903 13 18.74M37 9L18 22m23-8L19 29m24-9L22 35m21-7L26 40"></svg:path></svg:g>`,
})
export class IconParkOutlineMaskTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
