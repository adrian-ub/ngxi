import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDiamond28FilledIcon],svg[fluent-diamond-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.098 11.348a3.75 3.75 0 0 0 0 5.303l8.25 8.25a3.75 3.75 0 0 0 5.303 0l8.25-8.25a3.75 3.75 0 0 0 0-5.303l-8.25-8.25a3.75 3.75 0 0 0-5.303 0z"></svg:path>`,
})
export class FluentDiamond28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
