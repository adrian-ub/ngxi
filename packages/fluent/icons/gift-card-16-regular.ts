import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentGiftCard16RegularIcon],svg[fluent-gift-card-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2zm12 7a1 1 0 0 0 1-1V8H6.707l1.147 1.146a.5.5 0 1 1-.708.708L6 8.707V12zM7.915 7H14V5a1 1 0 0 0-1-1H6v1.085q.236-.084.5-.085a1.5 1.5 0 0 1 1.415 2M6.5 7a.5.5 0 1 0-.5-.5V7zM5 5.085V4H3a1 1 0 0 0-1 1v2h1.085A1.5 1.5 0 0 1 5 5.085M4.5 7H5v-.5a.5.5 0 1 0-.5.5m-.207 1H2v3a1 1 0 0 0 1 1h2V8.707L3.854 9.854a.5.5 0 0 1-.708-.708z"></svg:path>`,
})
export class FluentGiftCard16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
