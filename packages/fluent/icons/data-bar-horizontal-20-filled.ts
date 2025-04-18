import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDataBarHorizontal20FilledIcon],svg[fluent-data-bar-horizontal-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2a2 2 0 1 0 0 4h5a2 2 0 1 0 0-4zm0 6a2 2 0 1 0 0 4h8a2 2 0 1 0 0-4zm0 6a2 2 0 1 0 0 4h12a2 2 0 1 0 0-4z"></svg:path>`,
})
export class FluentDataBarHorizontal20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
