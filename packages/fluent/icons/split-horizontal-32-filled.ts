import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSplitHorizontal32FilledIcon],svg[fluent-split-horizontal-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 15a1 1 0 1 0 0 2h26a1 1 0 1 0 0-2zm3 11.5v-8h20v8a3.5 3.5 0 0 1-3.5 3.5h-13A3.5 3.5 0 0 1 6 26.5m20-13v-8A3.5 3.5 0 0 0 22.5 2h-13A3.5 3.5 0 0 0 6 5.5v8z"></svg:path>`,
})
export class FluentSplitHorizontal32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
