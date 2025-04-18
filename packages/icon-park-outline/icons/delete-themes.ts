import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineDeleteThemesIcon],svg[icon-park-outline-delete-themes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linejoin="round" d="M8 15h32l-3 29H11z" clip-rule="evenodd"></svg:path><svg:path stroke-linecap="round" d="M20.002 25.002v10m8-10.002v9.997"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 15L28.324 3L36 15"></svg:path></svg:g>`,
})
export class IconParkOutlineDeleteThemesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
