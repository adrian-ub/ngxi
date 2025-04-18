import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentWebAsset20FilledIcon],svg[fluent-web-asset-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm3.5 0a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1z"></svg:path>`,
})
export class FluentWebAsset20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
