import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSplitVertical32FilledIcon],svg[fluent-split-vertical-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 29a1 1 0 1 0 2 0V3a1 1 0 1 0-2 0zm11.5-3h-8V6h8A3.5 3.5 0 0 1 30 9.5v13a3.5 3.5 0 0 1-3.5 3.5m-13-20h-8A3.5 3.5 0 0 0 2 9.5v13A3.5 3.5 0 0 0 5.5 26h8z"></svg:path>`,
})
export class FluentSplitVertical32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
