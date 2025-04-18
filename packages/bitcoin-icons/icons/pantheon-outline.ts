import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsPantheonOutlineIcon],svg[bitcoin-icons-pantheon-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path stroke-linecap="round" d="M19 7.5H5a.5.5 0 0 1-.5-.5v-.64a.5.5 0 0 1 .342-.474l7-2.333a.5.5 0 0 1 .316 0l7 2.333a.5.5 0 0 1 .342.474V7a.5.5 0 0 1-.5.5Z"></svg:path><svg:rect width="15" height="2" rx=".5" transform="matrix(1 0 0 -1 4.5 19.5)"></svg:rect><svg:rect width="2" height="6" rx=".5" transform="matrix(1 0 0 -1 6 15.5)"></svg:rect><svg:rect width="2" height="6" rx=".5" transform="matrix(1 0 0 -1 16 15.5)"></svg:rect><svg:rect width="2" height="6" rx=".5" transform="matrix(1 0 0 -1 11 15.5)"></svg:rect></svg:g>`,
})
export class BitcoinIconsPantheonOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
