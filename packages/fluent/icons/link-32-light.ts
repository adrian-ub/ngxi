import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLink32LightIcon],svg[fluent-link-32-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 15.5A6.5 6.5 0 0 1 8.5 9h5a.5.5 0 0 1 0 1h-5a5.5 5.5 0 1 0 0 11h5a.5.5 0 0 1 0 1h-5A6.5 6.5 0 0 1 2 15.5m28 0A6.5 6.5 0 0 0 23.5 9h-5a.5.5 0 0 0 0 1h5a5.5 5.5 0 1 1 0 11h-5a.5.5 0 0 0 0 1h5a6.5 6.5 0 0 0 6.5-6.5M9.5 15a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1z"></svg:path>`,
})
export class FluentLink32LightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
