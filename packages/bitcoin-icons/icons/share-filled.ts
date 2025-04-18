import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsShareFilledIcon],svg[bitcoin-icons-share-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.336 3.221L3.873 8.71a.35.35 0 0 0-.027.654l6.05 2.593a.2.2 0 0 0 .196-.021l5.931-4.238c.184-.13.41.096.28.28l-4.238 5.931a.2.2 0 0 0-.02.195l2.592 6.05a.35.35 0 0 0 .654-.026L20.78 3.664a.35.35 0 0 0-.443-.443"></svg:path>`,
})
export class BitcoinIconsShareFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
