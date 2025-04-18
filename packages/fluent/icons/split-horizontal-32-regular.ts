import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSplitHorizontal32RegularIcon],svg[fluent-split-horizontal-32-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 15a1 1 0 1 0 0 2h26a1 1 0 1 0 0-2zm5 11.5v-8H6v8A3.5 3.5 0 0 0 9.5 30h13a3.5 3.5 0 0 0 3.5-3.5v-8h-2v8a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 8 26.5m18-13v-8A3.5 3.5 0 0 0 22.5 2h-13A3.5 3.5 0 0 0 6 5.5v8h2v-8A1.5 1.5 0 0 1 9.5 4h13A1.5 1.5 0 0 1 24 5.5v8z"></svg:path>`,
})
export class FluentSplitHorizontal32RegularIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
