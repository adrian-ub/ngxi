import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLineHorizontal2DashesSolid28RegularIcon],svg[fluent-line-horizontal-2-dashes-solid-28-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.75 9a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5zm9 0a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5zm9 0a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5zm-18 8a.75.75 0 0 0 0 1.5h22.5a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class FluentLineHorizontal2DashesSolid28RegularIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
