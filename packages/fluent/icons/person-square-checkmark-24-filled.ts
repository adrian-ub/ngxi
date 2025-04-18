import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPersonSquareCheckmark24FilledIcon],svg[fluent-person-square-checkmark-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6.25v11.5A3.25 3.25 0 0 0 6.25 21h5.772a6.46 6.46 0 0 1-1.008-3.07C8.474 17.556 7 15.755 7 14v-.5A1.5 1.5 0 0 1 8.5 12h5.534a6.47 6.47 0 0 1 3.466-1a6.47 6.47 0 0 1 3.5 1.022V6.25A3.25 3.25 0 0 0 17.75 3H6.25A3.25 3.25 0 0 0 3 6.25m9-.75a2.75 2.75 0 1 1 0 5.5a2.75 2.75 0 0 1 0-5.5m11 12a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0m-2.146-2.354a.5.5 0 0 0-.708 0L16.5 18.793l-1.646-1.647a.5.5 0 0 0-.708.708l2 2a.5.5 0 0 0 .708 0l4-4a.5.5 0 0 0 0-.708"></svg:path>`,
})
export class FluentPersonSquareCheckmark24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
