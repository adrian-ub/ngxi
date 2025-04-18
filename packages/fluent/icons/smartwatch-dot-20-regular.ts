import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSmartwatchDot20RegularIcon],svg[fluent-smartwatch-dot-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 2a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5m-2.993.685A2 2 0 0 0 12 2H8a2 2 0 0 0-2 2v1.268A2 2 0 0 0 5 7v6a2 2 0 0 0 1 1.732V16a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-1.268A2 2 0 0 0 15 13v-2a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.337a3.5 3.5 0 0 1-1.001-.715L14 7v6a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6q.198.001.372.071A3.5 3.5 0 0 1 13 4.5c0-.665.185-1.286.507-1.815M13 4.5V5H7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1zM7 15h6v1a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1z"></svg:path>`,
})
export class FluentSmartwatchDot20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
