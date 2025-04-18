import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentStackVertical20RegularIcon],svg[fluent-stack-vertical-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5.5A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v11a.5.5 0 0 1-1 0v-3a1.5 1.5 0 0 0-1.5-1.5h-9A1.5 1.5 0 0 0 4 13.5v3a.5.5 0 0 1-1 0zm1 6a2.5 2.5 0 0 1 1.5-.5h9a2.5 2.5 0 0 1 1.5.5v-2A1.5 1.5 0 0 0 14.5 8h-9A1.5 1.5 0 0 0 4 9.5zm12-6A1.5 1.5 0 0 0 14.5 4h-9A1.5 1.5 0 0 0 4 5.5v2c.418-.314.937-.5 1.5-.5h9c.563 0 1.082.186 1.5.5z"></svg:path>`,
})
export class FluentStackVertical20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
