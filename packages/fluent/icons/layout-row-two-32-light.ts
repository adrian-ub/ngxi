import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLayoutRowTwo32LightIcon],svg[fluent-layout-row-two-32-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7.5A4.5 4.5 0 0 1 7.5 3h17A4.5 4.5 0 0 1 29 7.5v17a4.5 4.5 0 0 1-4.5 4.5h-17A4.5 4.5 0 0 1 3 24.5zM7.5 4A3.5 3.5 0 0 0 4 7.5v8h24v-8A3.5 3.5 0 0 0 24.5 4zM28 16.5H4v8A3.5 3.5 0 0 0 7.5 28h17a3.5 3.5 0 0 0 3.5-3.5z"></svg:path>`,
})
export class FluentLayoutRowTwo32LightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
