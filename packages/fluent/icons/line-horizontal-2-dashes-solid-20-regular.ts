import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLineHorizontal2DashesSolid20RegularIcon],svg[fluent-line-horizontal-2-dashes-solid-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 6a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm6 0a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm6 0a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm-12 6a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1z"></svg:path>`,
})
export class FluentLineHorizontal2DashesSolid20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
