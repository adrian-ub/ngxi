import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentShapeExclude24FilledIcon],svg[fluent-shape-exclude-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.25 2A3.25 3.25 0 0 0 2 5.25v8a3.25 3.25 0 0 0 3.25 3.25H7.5v2.25A3.25 3.25 0 0 0 10.75 22h8A3.25 3.25 0 0 0 22 18.75v-8a3.25 3.25 0 0 0-3.25-3.25H16.5V5.25A3.25 3.25 0 0 0 13.25 2zM16.5 7.5v5.75a3.25 3.25 0 0 1-3.25 3.25H7.5v-5.75a3.25 3.25 0 0 1 3.25-3.25z"></svg:path>`,
})
export class FluentShapeExclude24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
