import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentHeadphones28FilledIcon],svg[fluent-headphones-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 22a4 4 0 0 1-4 4h-3a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h5v-2c0-5.523-4.477-10-10-10S4 8.477 4 14v2h5a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H6a4 4 0 0 1-4-4v-8C2 7.373 7.373 2 14 2s12 5.373 12 12z"></svg:path>`,
})
export class FluentHeadphones28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
