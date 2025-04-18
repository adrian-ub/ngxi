import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentWindowColumnOneFourthLeftFocusTop20FilledIcon],svg[fluent-window-column-one-fourth-left-focus-top-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 3A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h9a2.5 2.5 0 0 0 2.5-2.5v-9A2.5 2.5 0 0 0 14.5 3zM4 14.5V7h2v9h-.5A1.5 1.5 0 0 1 4 14.5M7 16V7h9v7.5a1.5 1.5 0 0 1-1.5 1.5z"></svg:path>`,
})
export class FluentWindowColumnOneFourthLeftFocusTop20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
