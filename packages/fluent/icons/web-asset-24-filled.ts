import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentWebAsset24FilledIcon],svg[fluent-web-asset-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6.25A3.25 3.25 0 0 1 6.25 3h11.5A3.25 3.25 0 0 1 21 6.25v11.5A3.25 3.25 0 0 1 17.75 21H6.25A3.25 3.25 0 0 1 3 17.75zm3.75.5a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class FluentWebAsset24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
