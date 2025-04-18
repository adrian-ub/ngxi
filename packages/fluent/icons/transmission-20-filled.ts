import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTransmission20FilledIcon],svg[fluent-transmission-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2a2 2 0 0 0-.5 3.937V9.5a.5.5 0 0 0 1 0V5.937A2 2 0 0 0 10 2M3 5a1 1 0 0 1 2 0v4a.5.5 0 0 0 .5.5H8a.5.5 0 0 0 0-1H6V5a2 2 0 1 0-4 0v11a2 2 0 1 0 4 0v-3.5h2V16a2 2 0 1 0 4 0v-3h4.5a1.5 1.5 0 0 0 1.5-1.5V5a2 2 0 1 0-4 0v3.5h-2a.5.5 0 0 0 0 1h2.5A.5.5 0 0 0 15 9V5a1 1 0 1 1 2 0v6.5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 0-.5.5V16a1 1 0 1 1-2 0v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4a1 1 0 1 1-2 0z"></svg:path>`,
})
export class FluentTransmission20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
