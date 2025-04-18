import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSkatesIcon],svg[icon-park-solid-skates-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M5 5h26v8H5z"></svg:path><svg:path fill="currentColor" d="M9 36V13h18v10c14 0 14 9 14 13z"></svg:path><svg:path d="M7 36h36v6H7z"></svg:path></svg:g>`,
})
export class IconParkSolidSkatesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
