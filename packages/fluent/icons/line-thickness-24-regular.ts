import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLineThickness24RegularIcon],svg[fluent-line-thickness-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.75 3.5a.75.75 0 0 0 0 1.5h18.5a.75.75 0 0 0 0-1.5zM2 10.75c0-.69.56-1.25 1.25-1.25h17.5a1.25 1.25 0 1 1 0 2.5H3.25C2.56 12 2 11.44 2 10.75m0 7.5c0-.966.784-1.75 1.75-1.75h16.5a1.75 1.75 0 1 1 0 3.5H3.75A1.75 1.75 0 0 1 2 18.25"></svg:path>`,
})
export class FluentLineThickness24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
