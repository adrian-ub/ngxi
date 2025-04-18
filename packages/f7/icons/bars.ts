import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7BarsIcon],svg[f7-bars-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M46.003 36c1.103 0 1.997.888 1.997 2c0 1.105-.892 2-1.997 2H9.997A1.994 1.994 0 0 1 8 38c0-1.105.892-2 1.997-2zm0-10c1.103 0 1.997.888 1.997 2c0 1.105-.892 2-1.997 2H9.997A1.994 1.994 0 0 1 8 28c0-1.105.892-2 1.997-2zm0-10c1.103 0 1.997.888 1.997 2c0 1.105-.892 2-1.997 2H9.997A1.994 1.994 0 0 1 8 18c0-1.105.892-2 1.997-2z"></svg:path>`,
})
export class F7BarsIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
