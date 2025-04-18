import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentProjectionScreen16FilledIcon],svg[fluent-projection-screen-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 2a1 1 0 0 0 0 2v4.5A2.5 2.5 0 0 0 5.5 11h2v2h-2a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-2v-2h2A2.5 2.5 0 0 0 13 8.5V4a1 1 0 1 0 0-2z"></svg:path>`,
})
export class FluentProjectionScreen16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
