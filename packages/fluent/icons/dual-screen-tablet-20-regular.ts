import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDualScreenTablet20RegularIcon],svg[fluent-dual-screen-tablet-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-3v-1h3a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v1H4zm9 6h.5a.5.5 0 0 0 0-1H13zM2 9a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.5V8zm6 8a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H7.5v8zm-1-2a.5.5 0 0 0 0 1h.5a.5.5 0 0 0 0-1zm-5 .5a.5.5 0 0 1 .5-.5H5a.5.5 0 0 1 0 1h-.5a.5.5 0 0 1-.5-.5"></svg:path>`,
})
export class FluentDualScreenTablet20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
