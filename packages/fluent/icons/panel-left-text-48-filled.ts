import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPanelLeftText48FilledIcon],svg[fluent-panel-left-text-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.25 7A6.25 6.25 0 0 0 4 13.25v21.5A6.25 6.25 0 0 0 10.25 41h27.5A6.25 6.25 0 0 0 44 34.75v-21.5A6.25 6.25 0 0 0 37.75 7zM19 9.5h18.75a3.75 3.75 0 0 1 3.75 3.75v21.5a3.75 3.75 0 0 1-3.75 3.75H19zM8.5 15c0-.69.56-1.25 1.25-1.25h3.5a1.25 1.25 0 1 1 0 2.5h-3.5c-.69 0-1.25-.56-1.25-1.25m0 9c0-.69.56-1.25 1.25-1.25h3.5a1.25 1.25 0 1 1 0 2.5h-3.5c-.69 0-1.25-.56-1.25-1.25m1.25 7.75h3.5a1.25 1.25 0 1 1 0 2.5h-3.5a1.25 1.25 0 1 1 0-2.5"></svg:path>`,
})
export class FluentPanelLeftText48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
