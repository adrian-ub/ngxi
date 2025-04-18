import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextExpand20RegularIcon],svg[fluent-text-expand-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5m0 12a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5m6-4a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5M5.5 14a3.5 3.5 0 1 1 0-7a3.5 3.5 0 0 1 0 7M6 8.5a.5.5 0 0 0-1 0V10H3.5a.5.5 0 0 0 0 1H5v1.5a.5.5 0 0 0 1 0V11h1.5a.5.5 0 0 0 0-1H6z"></svg:path>`,
})
export class FluentTextExpand20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
