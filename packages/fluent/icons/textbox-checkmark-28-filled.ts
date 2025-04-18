import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextboxCheckmark28FilledIcon],svg[fluent-textbox-checkmark-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.75 3A3.75 3.75 0 0 0 3 6.75v14.5A3.75 3.75 0 0 0 6.75 25h7.75a7.47 7.47 0 0 1-1.5-4.5q0-.51.066-1H8.75a.75.75 0 0 1 0-1.5h4.677A7.503 7.503 0 0 1 25 14.5V6.75A3.75 3.75 0 0 0 21.25 3zm2 10h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1 0-1.5M8 8.75A.75.75 0 0 1 8.75 8h10.5a.75.75 0 0 1 0 1.5H8.75A.75.75 0 0 1 8 8.75M27 20.5a6.5 6.5 0 1 1-13 0a6.5 6.5 0 0 1 13 0m-3.354-2.854L19 22.293l-1.646-1.647a.5.5 0 0 0-.708.708l2 2a.5.5 0 0 0 .708 0l5-5a.5.5 0 0 0-.708-.708"></svg:path>`,
})
export class FluentTextboxCheckmark28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
