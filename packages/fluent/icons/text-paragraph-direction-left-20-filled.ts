import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextParagraphDirectionLeft20FilledIcon],svg[fluent-text-paragraph-direction-left-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 3a4 4 0 1 0 0 8H13v6.5a.5.5 0 0 0 1 0V4h1v13.5a.5.5 0 0 0 1 0V4h.5a.5.5 0 0 0 0-1zM5.146 7.646a.5.5 0 1 1 .708.708L4.207 10l1.647 1.646a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708z"></svg:path>`,
})
export class FluentTextParagraphDirectionLeft20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
