import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsLeafIcon],svg[akar-icons-leaf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M8 18C19.955 18 20.917 7.83 20.994 2.997a.983.983 0 0 0-1.006-.988C3 2.321 3 10.557 3 18v4"></svg:path><svg:path d="M3 18s0-6 8-7"></svg:path></svg:g>`,
})
export class AkarIconsLeafIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
