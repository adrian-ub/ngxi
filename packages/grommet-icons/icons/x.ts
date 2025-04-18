import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsXIcon],svg[grommet-icons-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m.058 1l9.267 12.39L0 23.462h2.099l8.163-8.82l6.596 8.82H24l-9.788-13.087L22.892 1h-2.1l-7.517 8.122L7.2 1zm3.087 1.546h3.28l14.488 19.37h-3.28L3.145 2.547Z"></svg:path>`,
})
export class GrommetIconsXIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
