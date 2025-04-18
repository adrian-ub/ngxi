import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineCellularNetworkLteIcon],svg[streamline-cellular-network-lte-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.03 8.027v5.223M4.287 8.027H7.77m4.988 0H9.276v5.223h3.482m-3.482-2.83h3.047M1.242 8.027v5.223h3.047m5.238-8.404c-.773-.547-1.632-.853-2.511-.892c-.877.042-1.734.348-2.505.895M2.098 2.828A7.9 7.9 0 0 1 7.003.953a7.9 7.9 0 0 1 4.9 1.875"></svg:path>`,
})
export class StreamlineCellularNetworkLteIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
