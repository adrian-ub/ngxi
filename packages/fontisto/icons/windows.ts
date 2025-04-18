import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoWindowsIcon],svg[fontisto-windows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.84 12.663v9.39L0 20.697v-8.034zm0-10.72v9.505H0V3.303zM24 12.663V24l-13.082-1.803v-9.534zM24 0v11.452H10.918V1.803z"></svg:path>`,
})
export class FontistoWindowsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
