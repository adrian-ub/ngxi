import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentServer12RegularIcon],svg[fluent-server-12-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 1A1.5 1.5 0 0 0 3 2.5v7A1.5 1.5 0 0 0 4.5 11h3A1.5 1.5 0 0 0 9 9.5v-7A1.5 1.5 0 0 0 7.5 1zM4 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5zm1.5.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zM5 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5M5.5 8a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1z"></svg:path>`,
})
export class FluentServer12RegularIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
