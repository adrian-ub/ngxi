import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTabDesktopMultipleBottom20RegularIcon],svg[fluent-tab-desktop-multiple-bottom-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.086 4H5.051A2.5 2.5 0 0 1 7.5 2H14a4 4 0 0 1 4 4v6.5a2.5 2.5 0 0 1-2 2.45v-1.035a1.5 1.5 0 0 0 1-1.415V6a3 3 0 0 0-3-3H7.5a1.5 1.5 0 0 0-1.415 1M9.5 15H3v.5A1.5 1.5 0 0 0 4.5 17H10v-1.5a.5.5 0 0 0-.5-.5M3 14h6.5a1.5 1.5 0 0 1 1.5 1.5V17h1.5a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 12.5 6h-8A1.5 1.5 0 0 0 3 7.5zm1.5 4A2.5 2.5 0 0 1 2 15.5v-8A2.5 2.5 0 0 1 4.5 5h8A2.5 2.5 0 0 1 15 7.5v8a2.5 2.5 0 0 1-2.5 2.5z"></svg:path>`,
})
export class FluentTabDesktopMultipleBottom20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
