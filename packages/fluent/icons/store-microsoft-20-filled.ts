import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentStoreMicrosoft20FilledIcon],svg[fluent-store-microsoft-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 2.5V4H2.5a.5.5 0 0 0-.5.5v10A2.5 2.5 0 0 0 4.5 17h11a2.5 2.5 0 0 0 2.5-2.5v-10a.5.5 0 0 0-.5-.5H13V2.5A1.5 1.5 0 0 0 11.5 1h-3A1.5 1.5 0 0 0 7 2.5M8.5 2h3a.5.5 0 0 1 .5.5V4H8V2.5a.5.5 0 0 1 .5-.5m-2 8V7h3v3zm0 4v-3h3v3zm7-4h-3V7h3zm-3 4v-3h3v3z"></svg:path>`,
})
export class FluentStoreMicrosoft20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
