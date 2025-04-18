import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsConfirmations0FilledIcon],svg[bitcoin-icons-confirmations-0-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.018 4.806a.5.5 0 0 1 .593-.385a7.75 7.75 0 0 1 4.148 2.395a.5.5 0 0 1-.743.669a6.75 6.75 0 0 0-3.612-2.086a.5.5 0 0 1-.386-.593m5.722 4.48a.5.5 0 0 1 .63.32a7.75 7.75 0 0 1 0 4.79a.5.5 0 0 1-.95-.308a6.75 6.75 0 0 0 0-4.172a.5.5 0 0 1 .32-.63m-1.017 7.195a.5.5 0 0 1 .037.706a7.75 7.75 0 0 1-4.149 2.395a.5.5 0 1 1-.208-.978a6.75 6.75 0 0 0 3.613-2.086a.5.5 0 0 1 .707-.037m-11.445 0a.5.5 0 0 1 .706.037a6.75 6.75 0 0 0 3.613 2.086a.5.5 0 1 1-.208.978a7.75 7.75 0 0 1-4.148-2.395a.5.5 0 0 1 .037-.706M5.26 9.286a.5.5 0 0 1 .32.63a6.75 6.75 0 0 0 0 4.172a.5.5 0 1 1-.95.309a7.75 7.75 0 0 1 0-4.79a.5.5 0 0 1 .63-.321m5.722-4.48a.5.5 0 0 1-.385.593a6.75 6.75 0 0 0-3.613 2.086a.5.5 0 1 1-.743-.67a7.75 7.75 0 0 1 4.148-2.394a.5.5 0 0 1 .593.385" clip-rule="evenodd"></svg:path>`,
})
export class BitcoinIconsConfirmations0FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
