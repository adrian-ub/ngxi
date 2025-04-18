import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatHollowRedCircleIcon],svg[fluent-emoji-flat-hollow-red-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#F92F60" d="M16 7.5a8.5 8.5 0 1 0 0 17a8.5 8.5 0 0 0 0-17M2 16C2 8.268 8.268 2 16 2s14 6.268 14 14s-6.268 14-14 14S2 23.732 2 16"></svg:path>`,
})
export class FluentEmojiFlatHollowRedCircleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
