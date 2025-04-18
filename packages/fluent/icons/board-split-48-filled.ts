import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBoardSplit48FilledIcon],svg[fluent-board-split-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.25 6A5.25 5.25 0 0 0 6 11.25V23h21V6zM27 25.5H6v11.25C6 39.65 8.35 42 11.25 42H27zM36.75 42H29.5V31.5H42v5.25c0 2.9-2.35 5.25-5.25 5.25M42 19.5V29H29.5v-9.5zm0-2.5H29.5V6h7.25C39.65 6 42 8.35 42 11.25z"></svg:path>`,
})
export class FluentBoardSplit48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
