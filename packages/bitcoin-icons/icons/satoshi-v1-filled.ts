import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsSatoshiV1FilledIcon],svg[bitcoin-icons-satoshi-v1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0M8.693 8.742l7.637 2.063l.337-1.462L9.029 7.28zm5.526-3.05l-.406 1.774l-1.448-.392l.407-1.774zM11.227 18.7l.408-1.774l-1.448-.391l-.408 1.774zm4.421-4.934L8.011 11.7l.336-1.462l7.637 2.066zm-8.316.89l7.638 2.064l.336-1.462l-7.638-2.064z" clip-rule="evenodd"></svg:path>`,
})
export class BitcoinIconsSatoshiV1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
