import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLineHorizontal2DashesSolid24FilledIcon],svg[fluent-line-horizontal-2-dashes-solid-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7a1 1 0 0 0 0 2h3a1 1 0 0 0 0-2zm7.5 0a1 1 0 0 0 0 2h3a1 1 0 1 0 0-2zM18 7a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2zM3 15a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2z"></svg:path>`,
})
export class FluentLineHorizontal2DashesSolid24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
