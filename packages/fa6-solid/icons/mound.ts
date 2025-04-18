import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6SolidMoundIcon],svg[fa6-solid-mound-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M144.1 179.2C173.8 127.7 228.6 96 288 96s114.2 31.7 143.9 83.2L540.4 368c12.3 21.3-3.1 48-27.7 48H63.3c-24.6 0-40-26.6-27.7-48z"></svg:path>`,
})
export class Fa6SolidMoundIcon {
  readonly viewBox = input("0 0 576 512")
  readonly width = input("1.13em")
  readonly height = input("1em")
}
