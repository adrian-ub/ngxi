import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineSailingIcon],svg[icon-park-outline-sailing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M19 30h-8l8-9m20 9C39 17.008 28.994 4 19 4v26zm-6.349 11.577L42 36H6l2 6h23.114a3 3 0 0 0 1.537-.423M19 30v6"></svg:path><svg:path d="M29 21h12"></svg:path></svg:g>`,
})
export class IconParkOutlineSailingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
