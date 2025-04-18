import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentImageShadow20FilledIcon],svg[fluent-image-shadow-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 2a3 3 0 0 0-3 3v6c0 .648.205 1.248.555 1.738l4.243-4.243a1.7 1.7 0 0 1 2.404 0l4.243 4.243c.35-.49.555-1.09.555-1.738V5a3 3 0 0 0-3-3zm0 12a3 3 0 0 1-1.738-.555l4.243-4.243a.7.7 0 0 1 .99 0l4.243 4.243A2.98 2.98 0 0 1 11 14zm6-8a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-5 9a3 3 0 0 0 3 3h3a6 6 0 0 0 6-6V9a3 3 0 0 0-3-3v5a4 4 0 0 1-4 4z"></svg:path>`,
})
export class FluentImageShadow20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
