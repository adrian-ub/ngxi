import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLayoutRowFour16FilledIcon],svg[fluent-layout-row-four-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 8.5V11h12V8.5zm12-1V5H2v2.5zM4.5 14a2.5 2.5 0 0 1-2.45-2h11.9a2.5 2.5 0 0 1-2.45 2zm9.45-10a2.5 2.5 0 0 0-2.45-2h-7a2.5 2.5 0 0 0-2.45 2z"></svg:path>`,
})
export class FluentLayoutRowFour16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
