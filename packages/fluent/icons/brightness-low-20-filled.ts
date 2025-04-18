import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBrightnessLow20FilledIcon],svg[fluent-brightness-low-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 3a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 10 3m0 3a4 4 0 1 0 0 8a4 4 0 0 0 0-8m0 7V7a3 3 0 1 1 0 6m6.5-2.5a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1zM10 15a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5m-5.5-4.5a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1zm.646-5.354a.5.5 0 0 1 .708 0l.5.5a.5.5 0 1 1-.708.708l-.5-.5a.5.5 0 0 1 0-.708m.708 9.708a.5.5 0 0 1-.708-.708l.5-.5a.5.5 0 0 1 .708.708zm9-9.708a.5.5 0 0 0-.708 0l-.5.5a.5.5 0 0 0 .708.708l.5-.5a.5.5 0 0 0 0-.708m-.708 9.708a.5.5 0 0 0 .708-.708l-.5-.5a.5.5 0 0 0-.708.708z"></svg:path>`,
})
export class FluentBrightnessLow20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
