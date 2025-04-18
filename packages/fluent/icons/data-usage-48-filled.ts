import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDataUsage48FilledIcon],svg[fluent-data-usage-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 12a6 6 0 0 1 6-6h24a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6H12a6 6 0 0 1-6-6zm28 3.25a1.25 1.25 0 1 0-2.5 0v17.5a1.25 1.25 0 1 0 2.5 0zM24 24c-.69 0-1.25.56-1.25 1.25v7.5a1.25 1.25 0 1 0 2.5 0v-7.5c0-.69-.56-1.25-1.25-1.25m-7.5-3.75a1.25 1.25 0 1 0-2.5 0v12.5a1.25 1.25 0 1 0 2.5 0z"></svg:path>`,
})
export class FluentDataUsage48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
