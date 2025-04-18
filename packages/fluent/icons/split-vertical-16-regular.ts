import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSplitVertical16RegularIcon],svg[fluent-split-vertical-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 1.5a.5.5 0 0 0-1 0v13a.5.5 0 0 0 1 0zM6 13v-1H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3V3H3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2zm6 0H9v-1h3a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H9V3h3a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2"></svg:path>`,
})
export class FluentSplitVertical16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
