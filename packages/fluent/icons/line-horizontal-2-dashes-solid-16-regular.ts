import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLineHorizontal2DashesSolid16RegularIcon],svg[fluent-line-horizontal-2-dashes-solid-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zM7 5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm4.5 0a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm-9 5a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1z"></svg:path>`,
})
export class FluentLineHorizontal2DashesSolid16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
