import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riMarkupFillIcon],svg[ri-markup-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21.997c-5.523 0-10-4.477-10-10s4.477-10 10-10s10 4.477 10 10s-4.477 10-10 10m5.051-3.796l-.862-3.447a1 1 0 0 0-.97-.757H8.781a1 1 0 0 0-.97.757l-.862 3.447A7.97 7.97 0 0 0 12 19.997a7.97 7.97 0 0 0 5.051-1.796M10 11.997h4v-1.5l-1.039-3.635a1 1 0 0 0-1.922 0L10 10.497z"></svg:path>`,
})
export class RiMarkupFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
