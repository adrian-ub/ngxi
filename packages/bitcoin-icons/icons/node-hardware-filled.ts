import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsNodeHardwareFilledIcon],svg[bitcoin-icons-node-hardware-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M21 9.884a.73.73 0 0 0-.364-.646l-7.494-4.395a2.21 2.21 0 0 0-2.23-.003L3.368 9.237a.73.73 0 0 0-.365.647H3v4.43h.004a.73.73 0 0 0 .376.621l7.563 4.243a2.21 2.21 0 0 0 2.167-.003l7.515-4.24a.73.73 0 0 0 .375-.62zm-16.236.563a.375.375 0 1 0-.368.654l6.359 3.587a2.59 2.59 0 0 0 2.551-.006l6.278-3.582a.375.375 0 0 0-.372-.652l-6.278 3.583c-.56.32-1.248.322-1.81.004z" clip-rule="evenodd"></svg:path>`,
})
export class BitcoinIconsNodeHardwareFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
