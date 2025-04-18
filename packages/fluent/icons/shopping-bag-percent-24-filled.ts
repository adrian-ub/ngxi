import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentShoppingBagPercent24FilledIcon],svg[fluent-shopping-bag-percent-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 5v2H5.5A1.5 1.5 0 0 0 4 8.5V18a4 4 0 0 0 4 4h4.168a1.75 1.75 0 0 1 .345-1.987l.708-.71A4 4 0 0 1 13 18v-.337a3.5 3.5 0 0 1 0-6.326V5c0-.334-.055-.656-.156-.956A1.5 1.5 0 0 1 15.5 5v2h-1v4a3.5 3.5 0 0 1 3.5 3.5v.025l2-2V8.5A1.5 1.5 0 0 0 18.5 7H17V5a3 3 0 0 0-5-2.236A3 3 0 0 0 7 5m1.5 2V5a1.5 1.5 0 1 1 3 0v2zm6 10a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m0-3.5a1 1 0 1 1 0 2a1 1 0 0 1 0-2m6 9.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m0-3.5a1 1 0 1 1 0 2a1 1 0 0 1 0-2m1.28-5.22a.75.75 0 1 0-1.06-1.06l-7.5 7.5a.75.75 0 1 0 1.06 1.06z"></svg:path>`,
})
export class FluentShoppingBagPercent24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
