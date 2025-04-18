import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentAppRecent20RegularIcon],svg[fluent-app-recent-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 2a2 2 0 0 0-2 2H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2h1a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1a2 2 0 0 0-2-2zm8 3h1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-1zM5 15H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1zM6 4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1z"></svg:path>`,
})
export class FluentAppRecent20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
