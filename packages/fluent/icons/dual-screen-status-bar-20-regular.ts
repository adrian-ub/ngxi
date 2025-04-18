import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDualScreenStatusBar20RegularIcon],svg[fluent-dual-screen-status-bar-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h5.5V5zm12 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-5.5v10zm-4-9a.5.5 0 0 0 0 1h3.5a.5.5 0 0 0 0-1z"></svg:path>`,
})
export class FluentDualScreenStatusBar20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
