import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSelectObjectSkew24FilledIcon],svg[fluent-select-object-skew-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.586 6.414a2 2 0 0 0 1.9.527a2 2 0 1 0-1.9-.527M14.268 20A2 2 0 0 0 18 19a2 2 0 0 0-.586-1.414a2 2 0 0 0-1.9-.527A2.004 2.004 0 0 0 14 19c0 .364.097.706.268 1M4 21a2 2 0 1 1 0-4a2 2 0 0 1 0 4M6.586 6.414a2 2 0 0 0 1.9.527A2.004 2.004 0 0 0 10 5a2 2 0 1 0-3.414 1.414m-2.77 9.592l2.445-8.56a3 3 0 0 0 1.924.548l-2.446 8.56a3 3 0 0 0-1.923-.548M17.17 6h-6.342a3 3 0 0 0 0-2h6.342a3 3 0 0 0 0 2m-4 14a3 3 0 0 1 0-2H6.829a3 3 0 0 1 0 2zm2.645-3.994l2.445-8.56a3 3 0 0 0 1.924.548l-2.446 8.56a3 3 0 0 0-1.923-.548"></svg:path>`,
})
export class FluentSelectObjectSkew24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
