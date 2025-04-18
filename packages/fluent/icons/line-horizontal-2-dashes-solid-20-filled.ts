import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLineHorizontal2DashesSolid20FilledIcon],svg[fluent-line-horizontal-2-dashes-solid-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.75 6a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5zm6 0a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5zm6 0a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5zm-12 6a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class FluentLineHorizontal2DashesSolid20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
