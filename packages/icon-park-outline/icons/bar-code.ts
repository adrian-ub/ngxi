import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineBarCodeIcon],svg[icon-park-outline-bar-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M4 20h40M6 6v8m0 11.996v12.003M20.4 6v8m0 12v16M34.8 6v8M42 6v8m-7.2 12v8M13.2 6v8m0 12v8M27.6 6v8m0 12v8M42 26v12"></svg:path>`,
})
export class IconParkOutlineBarCodeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
