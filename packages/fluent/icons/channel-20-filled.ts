import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentChannel20FilledIcon],svg[fluent-channel-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 3a2.5 2.5 0 0 0-2.302 1.523Q3.347 4.5 3.5 4.5A2 2 0 1 1 3 8.437V14.5A2.5 2.5 0 0 0 5.5 17h9a2.5 2.5 0 0 0 2.5-2.5v-9A2.5 2.5 0 0 0 14.5 3zM7 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m.5 2.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1m-4-5.5a1 1 0 1 0 0 2a1 1 0 0 0 0-2"></svg:path>`,
})
export class FluentChannel20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
