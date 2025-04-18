import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentContentView32RegularIcon],svg[fluent-content-view-32-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.998 11a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2zm14 0h-12v3h12zm-3 7a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2zm0 2h3v2h-3zm-11-1a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2h-5a1 1 0 0 1-1-1m1 3a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2zM8.992 4a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5V9a5 5 0 0 0-5-5zm-3 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3h-14a3 3 0 0 1-3-3z"></svg:path>`,
})
export class FluentContentView32RegularIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
