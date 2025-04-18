import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDesktopKeyboard16FilledIcon],svg[fluent-desktop-keyboard-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 1a2 2 0 0 0-2 2v5.997a2 2 0 0 0 2 2h1v1.011h-.494a.5.5 0 0 0 0 1H5V9.75A2.75 2.75 0 0 1 7.75 7H13V3a2 2 0 0 0-2-2zm3 8.5A1.5 1.5 0 0 1 7.5 8h6A1.5 1.5 0 0 1 15 9.5v4a1.5 1.5 0 0 1-1.5 1.5h-6A1.5 1.5 0 0 1 6 13.5zm2 4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5m.5-3.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m1.5 1.5a.5.5 0 1 0-1 0a.5.5 0 0 0 1 0m.5-1.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m1.5 1.5a.5.5 0 1 0-1 0a.5.5 0 0 0 1 0m.5-1.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1"></svg:path>`,
})
export class FluentDesktopKeyboard16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
