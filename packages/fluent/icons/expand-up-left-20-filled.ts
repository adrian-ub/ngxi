import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentExpandUpLeft20FilledIcon],svg[fluent-expand-up-left-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 4a2 2 0 0 1 2 2v4h-4a2 2 0 0 0-2 2v4H6a2 2 0 0 1-2-2v-2.5a.5.5 0 0 0-1 0V14a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3h-2.5a.5.5 0 0 0 0 1zm-5-.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 1 0V4.707l4.146 4.147a.5.5 0 1 0 .708-.708L4.707 4H8.5a.5.5 0 0 0 .5-.5"></svg:path>`,
})
export class FluentExpandUpLeft20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
