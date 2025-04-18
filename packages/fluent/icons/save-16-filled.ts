import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSave16FilledIcon],svg[fluent-save-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 2v2.5A1.5 1.5 0 0 0 6.5 6h2A1.5 1.5 0 0 0 10 4.5V2h.379a2 2 0 0 1 1.414.586l1.621 1.621A2 2 0 0 1 14 5.621V12a2 2 0 0 1-2 2V9.5A1.5 1.5 0 0 0 10.5 8h-5C4.673 8 4 8.669 4 9.498V14a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm1 0v2.5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5V2zM5 14h6V9.5a.5.5 0 0 0-.5-.5h-5c-.277 0-.5.223-.5.498z"></svg:path>`,
})
export class FluentSave16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
