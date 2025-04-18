import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsFlagIcon],svg[lineicons-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M50.7 11.5c-1.2-1.3-2.8-2.1-4.6-2.1H16.3V4c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3v56c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3V36.8H44c3.1 0 5.7-2.3 6.1-5.3l2-15.2c.2-1.8-.3-3.5-1.4-4.8m-5 19.4c-.1.8-.8 1.4-1.6 1.4H16.3V13.9H46c.6 0 1 .3 1.2.5s.5.6.4 1.3z"></svg:path>`,
})
export class LineiconsFlagIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
