import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextboxCheckmark20FilledIcon],svg[fluent-textbox-checkmark-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 5.5A2.5 2.5 0 0 0 14.5 3h-9A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h4.1a5.5 5.5 0 0 1-.6-2.5a5.5 5.5 0 0 1 .207-1.5H6.5a.5.5 0 0 1 0-1h3.1A5.5 5.5 0 0 1 17 9.6zm-11 1a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5M6.5 9h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1M19 14.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-2.854-1.854L13.5 15.293l-.646-.647a.5.5 0 0 0-.708.708l1 1a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708"></svg:path>`,
})
export class FluentTextboxCheckmark20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
