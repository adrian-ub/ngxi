import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentAppsList32FilledIcon],svg[fluent-apps-list-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 2a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3zm9 3a1 1 0 1 0 0 2h15a1 1 0 1 0 0-2zm-1 11a1 1 0 0 1 1-1h15a1 1 0 1 1 0 2H14a1 1 0 0 1-1-1m0 10a1 1 0 0 1 1-1h15a1 1 0 1 1 0 2H14a1 1 0 0 1-1-1M2 15a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3zm3 7a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3z"></svg:path>`,
})
export class FluentAppsList32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
