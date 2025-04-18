import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSplitVertical20FilledIcon],svg[fluent-split-vertical-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2.5a.5.5 0 0 0-1 0v15a.5.5 0 0 0 1 0zM2 6a2 2 0 0 1 2-2h4v12H4a2 2 0 0 1-2-2zm9 10h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4z"></svg:path>`,
})
export class FluentSplitVertical20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
