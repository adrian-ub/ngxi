import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTabDesktopNewPage20FilledIcon],svg[fluent-tab-desktop-new-page-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5.5A2.5 2.5 0 0 1 5.5 3H8v2.5A1.5 1.5 0 0 0 9.5 7H17v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5zM8 11a1 1 0 1 0-2 0a1 1 0 0 0 2 0m2 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2m4-1a1 1 0 1 0-2 0a1 1 0 0 0 2 0m3-5v-.5A2.5 2.5 0 0 0 14.5 3H9v2.5a.5.5 0 0 0 .5.5z"></svg:path>`,
})
export class FluentTabDesktopNewPage20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
