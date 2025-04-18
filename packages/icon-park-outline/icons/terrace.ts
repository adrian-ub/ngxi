import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineTerraceIcon],svg[icon-park-outline-terrace-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M5 24v16a2 2 0 0 0 2 2h34a2 2 0 0 0 2-2V24m0 7H5"></svg:path><svg:path d="M32 23a8 8 0 1 0-16 0"></svg:path><svg:path stroke-linejoin="round" d="M24 6v2m11.414 2L34 11.414M12 10l1.414 1.414"></svg:path></svg:g>`,
})
export class IconParkOutlineTerraceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
