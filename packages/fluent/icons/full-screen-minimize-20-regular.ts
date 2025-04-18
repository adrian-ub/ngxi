import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFullScreenMinimize20RegularIcon],svg[fluent-full-screen-minimize-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 5a1 1 0 0 0 1 1h2a.5.5 0 0 1 0 1h-2a2 2 0 0 1-2-2V3a.5.5 0 0 1 1 0zM6 15a1 1 0 0 0-1-1H3a.5.5 0 0 1 0-1h2a2 2 0 0 1 2 2v2a.5.5 0 0 1-1 0zm8 0a1 1 0 0 1 1-1h2a.5.5 0 0 0 0-1h-2a2 2 0 0 0-2 2v2a.5.5 0 0 0 1 0zM5 6a1 1 0 0 0 1-1V3a.5.5 0 0 1 1 0v2a2 2 0 0 1-2 2H3a.5.5 0 0 1 0-1z"></svg:path>`,
})
export class FluentFullScreenMinimize20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
