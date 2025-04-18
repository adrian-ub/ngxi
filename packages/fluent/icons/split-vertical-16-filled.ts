import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSplitVertical16FilledIcon],svg[fluent-split-vertical-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 1.5a.5.5 0 0 0-1 0v13a.5.5 0 0 0 1 0zM1 5a2 2 0 0 1 2-2h3v10H3a2 2 0 0 1-2-2zm8 8h3a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H9z"></svg:path>`,
})
export class FluentSplitVertical16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
