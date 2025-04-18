import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPanelLeftText24RegularIcon],svg[fluent-panel-left-text-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.75 8.5a.75.75 0 0 1 .75-.75h1.25a.75.75 0 0 1 0 1.5H5.5a.75.75 0 0 1-.75-.75m0 3.5a.75.75 0 0 1 .75-.75h1.25a.75.75 0 0 1 0 1.5H5.5a.75.75 0 0 1-.75-.75m0 3.5a.75.75 0 0 1 .75-.75h1.25a.75.75 0 0 1 0 1.5H5.5a.75.75 0 0 1-.75-.75M5.25 4A3.25 3.25 0 0 0 2 7.25v9.5A3.25 3.25 0 0 0 5.25 20h13.5A3.25 3.25 0 0 0 22 16.75v-9.5A3.25 3.25 0 0 0 18.75 4zm13.5 14.5H10v-13h8.75c.966 0 1.75.784 1.75 1.75v9.5a1.75 1.75 0 0 1-1.75 1.75m-13.5-13H8.5v13H5.25a1.75 1.75 0 0 1-1.75-1.75v-9.5c0-.966.784-1.75 1.75-1.75"></svg:path>`,
})
export class FluentPanelLeftText24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
