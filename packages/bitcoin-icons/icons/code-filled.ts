import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsCodeFilledIcon],svg[bitcoin-icons-code-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.737 6.789a.75.75 0 0 1 .475.948l-3 9a.75.75 0 0 1-1.423-.474l3-9a.75.75 0 0 1 .948-.474m2.275 1.141a.75.75 0 0 1 1.058.082l3 3.5a.75.75 0 0 1 0 .976l-3 3.5a.75.75 0 0 1-1.14-.976L18.513 12l-2.581-3.012a.75.75 0 0 1 .08-1.057M7.988 7.93a.75.75 0 0 1 .081 1.058L5.488 12l2.581 3.012a.75.75 0 0 1-1.138.976l-3-3.5a.75.75 0 0 1 0-.976l3-3.5a.75.75 0 0 1 1.057-.081" clip-rule="evenodd"></svg:path>`,
})
export class BitcoinIconsCodeFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
