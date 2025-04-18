import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentAddSquareMultiple20FilledIcon],svg[fluent-add-square-multiple-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 5.268A2 2 0 0 1 17 7v6a4 4 0 0 1-4 4H7a2 2 0 0 1-1.732-1H13a3 3 0 0 0 3-3zM15 5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zm-3 4a.5.5 0 0 1-.5.5h-2v2a.5.5 0 0 1-1 0v-2h-2a.5.5 0 1 1 0-1h2v-2a.5.5 0 1 1 1 0v2h2a.5.5 0 0 1 .5.5"></svg:path>`,
})
export class FluentAddSquareMultiple20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
