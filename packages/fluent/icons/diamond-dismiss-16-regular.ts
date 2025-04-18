import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDiamondDismiss16RegularIcon],svg[fluent-diamond-dismiss-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.732 6.233a2.5 2.5 0 0 0 0 3.536l4.501 4.5a2.5 2.5 0 0 0 3.536 0l4.5-4.5a2.5 2.5 0 0 0 0-3.536l-4.5-4.5a2.5 2.5 0 0 0-3.536 0zm.707 2.829a1.5 1.5 0 0 1 0-2.122l4.501-4.5a1.5 1.5 0 0 1 2.122 0l4.5 4.5a1.5 1.5 0 0 1 0 2.122l-4.5 4.5a1.5 1.5 0 0 1-2.122 0zm3.915-3.416a.5.5 0 1 0-.708.708L7.293 8L5.646 9.646a.5.5 0 0 0 .708.708L8 8.707l1.646 1.647a.5.5 0 0 0 .708-.708L8.707 8l1.647-1.646a.5.5 0 0 0-.708-.708L8 7.293z"></svg:path>`,
})
export class FluentDiamondDismiss16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
