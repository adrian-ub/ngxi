import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatRedTriangleIcon],svg[fluent-emoji-flat-red-triangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#F8312F" d="M15.134 9.5a1 1 0 0 1 1.732 0L22.928 20a1 1 0 0 1-.866 1.5H9.938a1 1 0 0 1-.866-1.5z"></svg:path>`,
})
export class FluentEmojiFlatRedTriangleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
