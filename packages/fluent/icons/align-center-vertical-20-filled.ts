import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentAlignCenterVertical20FilledIcon],svg[fluent-align-center-vertical-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 18a.5.5 0 0 1-.5-.5V16H8a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2h2V9H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h4V2.5a.5.5 0 0 1 1 0V4h4a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-4v2h2a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-2v1.5a.5.5 0 0 1-.5.5"></svg:path>`,
})
export class FluentAlignCenterVertical20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
