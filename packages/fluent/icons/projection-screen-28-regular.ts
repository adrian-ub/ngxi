import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentProjectionScreen28RegularIcon],svg[fluent-projection-screen-28-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3a2 2 0 0 0-1 3.732v9.518a4.25 4.25 0 0 0 4.25 4.25h6v3h-4.5a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5h-4.5v-3h6A4.25 4.25 0 0 0 25 16.25V6.732A2 2 0 0 0 24 3zm.5 4h19v9.25A2.75 2.75 0 0 1 20.75 19H7.25a2.75 2.75 0 0 1-2.75-2.75z"></svg:path>`,
})
export class FluentProjectionScreen28RegularIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
