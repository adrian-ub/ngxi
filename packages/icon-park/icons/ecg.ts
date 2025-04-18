import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkEcgIcon],svg[icon-park-ecg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M4 22H8L12 11L17 37L23 20L27 28L34 15L38 29L40 22H44"></svg:path>`,
})
export class IconParkEcgIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
