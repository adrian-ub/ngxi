import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentWifi320FilledIcon],svg[fluent-wifi-3-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.955 11.84c.363.364.662.81.87 1.283a.75.75 0 0 1-1.375.602a2.7 2.7 0 0 0-.556-.824a2.63 2.63 0 0 0-3.72 0a2.7 2.7 0 0 0-.547.814a.75.75 0 1 1-1.374-.601c.209-.477.498-.91.86-1.273a4.13 4.13 0 0 1 5.842 0m-2.034 2.042a1.242 1.242 0 1 1-1.757 1.757a1.242 1.242 0 0 1 1.757-1.757"></svg:path>`,
})
export class FluentWifi320FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
