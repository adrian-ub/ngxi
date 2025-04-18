import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7MoneyDollarCircleFillIcon],svg[f7-money-dollar-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 28C4 14.745 14.745 4 28 4s24 10.745 24 24s-10.745 24-24 24S4 41.255 4 28m24.573 1.744c2.974.732 3.865 1.702 3.865 3.34c0 1.702-1.145 2.99-3.865 3.197zm-1.797-3.673c-2.544-.637-3.499-1.702-3.499-3.15s1.209-2.767 3.5-3.053zm1.797.429v-6.632c2.036.254 3.467 1.415 3.674 3.42h3.308c-.127-3.61-3.006-5.996-6.982-6.315v-2.687h-1.797v2.687c-4.008.303-6.87 2.656-6.87 6.219c0 3.228 2.179 5.042 6.218 5.98l.652.159v6.934c-2.56-.27-3.769-1.638-4.055-3.499h-3.292c.11 3.817 3.308 6.091 7.347 6.394v2.671h1.797V39.16c4.056-.287 7.237-2.497 7.237-6.394c0-3.387-2.29-5.105-6.473-6.075z"></svg:path>`,
})
export class F7MoneyDollarCircleFillIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
