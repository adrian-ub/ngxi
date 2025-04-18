import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentWebAsset16FilledIcon],svg[fluent-web-asset-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 2A2.5 2.5 0 0 0 2 4.5v7A2.5 2.5 0 0 0 4.5 14h7a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 11.5 2zM5 5h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1"></svg:path>`,
})
export class FluentWebAsset16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
