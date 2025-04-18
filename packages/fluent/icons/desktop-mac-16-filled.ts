import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDesktopMac16FilledIcon],svg[fluent-desktop-mac-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.01 3.796Q2 3.896 2 4v6a2 2 0 0 0 2 2h2v.5a.5.5 0 0 1-.5.5H5a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-.5a.5.5 0 0 1-.5-.5V12h2a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4a2 2 0 0 0-1.99 1.796M9 12v.5q.001.264.085.5h-2.17q.084-.236.085-.5V12zm3-1H4a1 1 0 0 1-1-1h10a1 1 0 0 1-1 1"></svg:path>`,
})
export class FluentDesktopMac16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
