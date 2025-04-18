import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsFileFilledIcon],svg[bitcoin-icons-file-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13 4H7.5A1.5 1.5 0 0 0 6 5.5v13A1.5 1.5 0 0 0 7.5 20h9a1.5 1.5 0 0 0 1.5-1.5V9h-.004zm-1 1.604V9.75c0 .138.112.25.25.25h4.147a.25.25 0 0 0 .176-.427l-4.146-4.146a.25.25 0 0 0-.427.177" clip-rule="evenodd"></svg:path>`,
})
export class BitcoinIconsFileFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
