import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsTipJarFilledIcon],svg[bitcoin-icons-tip-jar-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="13" height="8" x="5.5" y="13" fill="currentColor" rx="1"></svg:rect><svg:path fill="currentColor" d="M6.5 11.5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v1h-11z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 10a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7m.727-4.35a.5.5 0 0 0-.97-.241l-.484 1.94a.5.5 0 1 0 .97.242z" clip-rule="evenodd"></svg:path>`,
})
export class BitcoinIconsTipJarFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
