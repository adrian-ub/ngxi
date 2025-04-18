import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentHeadset20FilledIcon],svg[fluent-headset-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2a6 6 0 0 0-6 6v6a3 3 0 0 0 3 3h1.268A2 2 0 1 0 8 16H7a2 2 0 0 1-2-2v-1h2a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H5a5 5 0 0 1 10 0h-2a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 0 2-2V8a6 6 0 0 0-6-6"></svg:path>`,
})
export class FluentHeadset20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
