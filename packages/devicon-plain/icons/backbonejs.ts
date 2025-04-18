import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconPlainBackbonejsIcon],svg[devicon-plain-backbonejs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M64 31.124L15 3.239v121.522l49-27.885l49 27.885V3.239zM40.714 63.999l24.369-13.89l24.368 13.89l-24.368 13.892zM32 29.934l17.433 9.937L32 49.809zm0 48.257l16.126 9.191L32 96.575zm65 18.384l-16.127-9.192L97 78.191zM79.566 39.87L97 29.934v19.875z"></svg:path>`,
})
export class DeviconPlainBackbonejsIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
