import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBuildingCheckmark16FilledIcon],svg[fluent-building-checkmark-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3.5A1.5 1.5 0 0 1 4.5 2h4A1.5 1.5 0 0 1 10 3.5v2.707A5.5 5.5 0 0 0 6.022 11H5.5a.5.5 0 0 0-.5.5V14H3.5a.5.5 0 0 1-.5-.5zM5.5 5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m0 2.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m0 2.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m2-5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m0 2.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m8.5 4a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-2.854-1.854L10.5 12.293l-.646-.647a.5.5 0 0 0-.708.708l1 1a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708"></svg:path>`,
})
export class FluentBuildingCheckmark16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
