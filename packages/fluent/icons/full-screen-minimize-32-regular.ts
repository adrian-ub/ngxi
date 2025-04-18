import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFullScreenMinimize32RegularIcon],svg[fluent-full-screen-minimize-32-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 29a1 1 0 0 0 1-1v-3.75A3.25 3.25 0 0 0 7.75 21H4a1 1 0 1 0 0 2h3.75c.69 0 1.25.56 1.25 1.25V28a1 1 0 0 0 1 1m12 0a1 1 0 0 0 1-1v-3.75c0-.69.56-1.25 1.25-1.25H28a1 1 0 1 0 0-2h-3.75A3.25 3.25 0 0 0 21 24.25V28a1 1 0 0 0 1 1M3 10a1 1 0 0 0 1 1h3.75A3.25 3.25 0 0 0 11 7.75V4a1 1 0 1 0-2 0v3.75C9 8.44 8.44 9 7.75 9H4a1 1 0 0 0-1 1m18-2.25A3.25 3.25 0 0 0 24.25 11H28a1 1 0 1 0 0-2h-3.75C23.56 9 23 8.44 23 7.75V4a1 1 0 1 0-2 0z"></svg:path>`,
})
export class FluentFullScreenMinimize32RegularIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
