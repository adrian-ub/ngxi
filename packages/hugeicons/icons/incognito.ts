import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsIncognitoIcon],svg[hugeicons-incognito-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M10 18a3 3 0 1 0-6 0a3 3 0 0 0 6 0m10 0a3 3 0 1 0-6 0a3 3 0 0 0 6 0M2 12h20"></svg:path><svg:path d="M14.5 16.341A3 3 0 0 0 12 15a3 3 0 0 0-2.5 1.341M3 12l1.662-6.297c.097-.367.145-.55.192-.681c.681-1.896 2.91-2.62 4.519-1.47c.11.08.252.2.535.444c.162.14.243.21.318.267c1.056.8 2.492.8 3.548 0c.075-.057.156-.127.319-.267c.282-.243.424-.365.534-.444c1.61-1.15 3.838-.426 4.52 1.47c.046.13.095.314.191.68L21 12z"></svg:path></svg:g>`,
})
export class HugeiconsIncognitoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
