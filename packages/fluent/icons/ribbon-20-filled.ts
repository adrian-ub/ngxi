import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentRibbon20FilledIcon],svg[fluent-ribbon-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 8A6 6 0 1 1 4 8a6 6 0 0 1 12 0m-6 7a6.97 6.97 0 0 0 4-1.255V17.5a.5.5 0 0 1-.79.407L10 16l-3.21 1.907A.5.5 0 0 1 6 17.5v-3.755A6.97 6.97 0 0 0 10 15"></svg:path>`,
})
export class FluentRibbon20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
