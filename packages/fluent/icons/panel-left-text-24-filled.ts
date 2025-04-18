import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPanelLeftText24FilledIcon],svg[fluent-panel-left-text-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 7.25A3.25 3.25 0 0 1 5.25 4h13.5A3.25 3.25 0 0 1 22 7.25v9.5A3.25 3.25 0 0 1 18.75 20H5.25A3.25 3.25 0 0 1 2 16.75zm8 11.25h8.75a1.75 1.75 0 0 0 1.75-1.75v-9.5a1.75 1.75 0 0 0-1.75-1.75H10zm-5.25-10c0 .414.336.75.75.75h1.25a.75.75 0 0 0 0-1.5H5.5a.75.75 0 0 0-.75.75m0 3.5c0 .414.336.75.75.75h1.25a.75.75 0 0 0 0-1.5H5.5a.75.75 0 0 0-.75.75m.75 2.75a.75.75 0 0 0 0 1.5h1.25a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class FluentPanelLeftText24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
