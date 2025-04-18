import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatDeciduousTreeIcon],svg[fluent-emoji-flat-deciduous-tree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#6D4534" d="M18 22.24h-4v7.78h4z"></svg:path><svg:path fill="#44911B" d="M25.9 15.2c.38-.76.6-1.62.6-2.53c0-2.91-2.19-5.3-5-5.63V7c0-2.76-2.24-5-5-5s-5 2.24-5 5v.04a5.662 5.662 0 0 0-4.4 8.16c-1.26.94-2.1 2.43-2.1 4.12c0 2.84 2.32 5.16 5.16 5.16h12.68c2.84 0 5.16-2.32 5.16-5.16c0-1.69-.84-3.18-2.1-4.12"></svg:path></svg:g>`,
})
export class FluentEmojiFlatDeciduousTreeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
