import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirWashIcon],svg[iconoir-wash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m22 5l-1.954 12.314A2 2 0 0 1 18.07 19H5.93a2 2 0 0 1-1.975-1.686L2 5"></svg:path><svg:path d="M21 11c-2 0-4.5-3-4.5-3s-2.149 3-4.5 3s-4.5-3-4.5-3S5 11 3 11"></svg:path></svg:g>`,
})
export class IconoirWashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
