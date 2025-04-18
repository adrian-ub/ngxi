import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineFlashlampIcon],svg[icon-park-outline-flashlamp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:circle cx="24" cy="24" r="20"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="m23 14l-5 10h12l-5 10"></svg:path></svg:g>`,
})
export class IconParkOutlineFlashlampIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
