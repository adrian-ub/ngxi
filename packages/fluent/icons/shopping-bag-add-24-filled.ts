import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentShoppingBagAdd24FilledIcon],svg[fluent-shopping-bag-add-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 7V5a3 3 0 0 1 5-2.236A3 3 0 0 1 17 5v2h1.5A1.5 1.5 0 0 1 20 8.5v2.998A6.5 6.5 0 0 0 17.5 11a6.5 6.5 0 0 0-3 .732V7h1V5a1.5 1.5 0 0 0-2.656-.956c.101.3.156.622.156.956v7.81a6.48 6.48 0 0 0-2 4.69c0 1.747.689 3.332 1.81 4.5H8a4 4 0 0 1-4-4V8.5A1.5 1.5 0 0 1 5.5 7zm1.5-2v2h3V5a1.5 1.5 0 0 0-3 0m9 7a5.5 5.5 0 1 1 0 11a5.5 5.5 0 0 1 0-11m.501 8.503V18h2.496a.5.5 0 0 0 0-1H18v-2.5a.5.5 0 1 0-1 0V17h-2.504a.5.5 0 0 0 0 1H17v2.503a.5.5 0 1 0 1 0"></svg:path>`,
})
export class FluentShoppingBagAdd24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
