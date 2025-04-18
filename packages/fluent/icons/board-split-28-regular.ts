import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBoardSplit28RegularIcon],svg[fluent-board-split-28-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6.75A3.75 3.75 0 0 1 6.75 3h14.5A3.75 3.75 0 0 1 25 6.75v14.5A3.75 3.75 0 0 1 21.25 25H6.75A3.75 3.75 0 0 1 3 21.25zm1.5 7.75v6.75a2.25 2.25 0 0 0 2.25 2.25H16v-9zM16 13V4.5H6.75A2.25 2.25 0 0 0 4.5 6.75V13zm5.25 10.5a2.25 2.25 0 0 0 2.25-2.25V18h-6v5.5zm2.25-7v-5h-6v5zm-6-12V10h6V6.75a2.25 2.25 0 0 0-2.25-2.25z"></svg:path>`,
})
export class FluentBoardSplit28RegularIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
