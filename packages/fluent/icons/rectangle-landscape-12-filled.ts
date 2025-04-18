import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentRectangleLandscape12FilledIcon],svg[fluent-rectangle-landscape-12-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"></svg:path>`,
})
export class FluentRectangleLandscape12FilledIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
