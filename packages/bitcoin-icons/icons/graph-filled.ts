import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsGraphFilledIcon],svg[bitcoin-icons-graph-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.5 18a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5" clip-rule="evenodd"></svg:path><svg:rect width="3" height="7" x="6.5" y="11.5" fill="currentColor" rx=".5"></svg:rect><svg:rect width="3" height="13" x="10.5" y="5.5" fill="currentColor" rx=".5"></svg:rect><svg:rect width="3" height="10" x="14.5" y="8.5" fill="currentColor" rx=".5"></svg:rect>`,
})
export class BitcoinIconsGraphFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
