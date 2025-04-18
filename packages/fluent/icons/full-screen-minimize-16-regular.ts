import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFullScreenMinimize16RegularIcon],svg[fluent-full-screen-minimize-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 4a1 1 0 0 0 1 1h1.5a.5.5 0 0 1 0 1H12a2 2 0 0 1-2-2V2.5a.5.5 0 0 1 1 0zm0 8a1 1 0 0 1 1-1h1.5a.5.5 0 0 0 0-1H12a2 2 0 0 0-2 2v1.5a.5.5 0 0 0 1 0zm-7-1a1 1 0 0 1 1 1v1.5a.5.5 0 0 0 1 0V12a2 2 0 0 0-2-2H2.5a.5.5 0 0 0 0 1zm1-7a1 1 0 0 1-1 1H2.5a.5.5 0 0 0 0 1H4a2 2 0 0 0 2-2V2.5a.5.5 0 0 0-1 0z"></svg:path>`,
})
export class FluentFullScreenMinimize16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
