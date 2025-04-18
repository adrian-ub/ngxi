import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLineHorizontal2DashesSolid28FilledIcon],svg[fluent-line-horizontal-2-dashes-solid-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 9a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2zm9 0a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2zm9 0a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2zM3 17a1 1 0 1 0 0 2h22a1 1 0 1 0 0-2z"></svg:path>`,
})
export class FluentLineHorizontal2DashesSolid28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
