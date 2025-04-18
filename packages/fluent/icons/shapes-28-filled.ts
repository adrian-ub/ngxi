import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentShapes28FilledIcon],svg[fluent-shapes-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2a8 8 0 0 1 8 8h-3.25A4.75 4.75 0 0 0 10 14.75V18a8 8 0 1 1 0-16m1 12.75A3.75 3.75 0 0 1 14.75 11h7.5A3.75 3.75 0 0 1 26 14.75v7.5A3.75 3.75 0 0 1 22.25 26h-7.5A3.75 3.75 0 0 1 11 22.25z"></svg:path>`,
})
export class FluentShapes28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
