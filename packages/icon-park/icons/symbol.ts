import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSymbolIcon],svg[icon-park-symbol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M4 40.0032H18.0039C11.3346 35.6355 8 30.3009 8 23.9995C8 14.5473 15.0167 7.99976 24.0083 7.99976C33 7.99976 40 14.9998 40 23.9995C40 29.9993 36.6689 35.3338 30.0066 40.0032H44"></svg:path>`,
})
export class IconParkSymbolIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
