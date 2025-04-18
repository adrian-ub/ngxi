import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentResizeLarge20FilledIcon],svg[fluent-resize-large-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 4A1.5 1.5 0 0 0 4 5.5v1a.5.5 0 0 1-1 0v-1A2.5 2.5 0 0 1 5.5 3h1a.5.5 0 0 1 0 1zm1 1A1.5 1.5 0 0 0 5 6.5v7A1.5 1.5 0 0 0 6.5 15h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 13.5 5zm8-1A1.5 1.5 0 0 1 16 5.5v1a.5.5 0 0 0 1 0v-1A2.5 2.5 0 0 0 14.5 3h-1a.5.5 0 0 0 0 1zm0 12a1.5 1.5 0 0 0 1.5-1.5v-1a.5.5 0 0 1 1 0v1a2.5 2.5 0 0 1-2.5 2.5h-1a.5.5 0 0 1 0-1zm-9 0A1.5 1.5 0 0 1 4 14.5v-1.25a.5.5 0 0 0-1 0v1.25A2.5 2.5 0 0 0 5.5 17h1.25a.5.5 0 0 0 0-1z"></svg:path>`,
})
export class FluentResizeLarge20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
