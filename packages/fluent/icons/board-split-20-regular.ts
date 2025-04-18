import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBoardSplit20RegularIcon],svg[fluent-board-split-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm1 4v4a2 2 0 0 0 2 2h5v-6zm7-1V4H6a2 2 0 0 0-2 2v3zm1 7h2a2 2 0 0 0 2-2v-1h-4zm4-9V6a2 2 0 0 0-2-2h-2v3zm0 1h-4v4h4z"></svg:path>`,
})
export class FluentBoardSplit20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
