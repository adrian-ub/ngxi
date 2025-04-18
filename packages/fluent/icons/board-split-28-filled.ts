import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBoardSplit28FilledIcon],svg[fluent-board-split-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.75 3A3.75 3.75 0 0 0 3 6.75V13h13V3zM16 14.5H3v6.75A3.75 3.75 0 0 0 6.75 25H16zM21.25 25H17.5v-7H25v3.25A3.75 3.75 0 0 1 21.25 25M25 16.5h-7.5v-5H25zM17.5 3v7H25V6.75A3.75 3.75 0 0 0 21.25 3z"></svg:path>`,
})
export class FluentBoardSplit28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
