import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconFirefoxIcon],svg[picon-firefox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 1h1l1-1v2h1L3 3l2 1C0 4 8 9 6 2l1 1l-1-3c8 10-12 11-4 0"></svg:path>`,
})
export class PiconFirefoxIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
