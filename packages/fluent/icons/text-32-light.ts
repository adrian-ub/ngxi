import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentText32LightIcon],svg[fluent-text-32-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 4.5a.5.5 0 0 1 .5-.5h19a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V5h-8.5v22h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3V5H7v3.5a.5.5 0 0 1-1 0z"></svg:path>`,
})
export class FluentText32LightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
