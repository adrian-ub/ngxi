import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFontDecrease20FilledIcon],svg[fluent-font-decrease-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.238 2.18a.75.75 0 0 0-.976 1.14l1.75 1.5c.28.24.695.24.976 0l1.75-1.5a.75.75 0 1 0-.976-1.14L15.5 3.263zM10 4a.75.75 0 0 0-.695.469l-4.25 10.5a.75.75 0 1 0 1.39.562L7.875 12h4.25l1.43 3.531a.75.75 0 1 0 1.39-.563l-4.25-10.5A.75.75 0 0 0 10 4m0 2.749l1.518 3.75H8.482z"></svg:path>`,
})
export class FluentFontDecrease20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
