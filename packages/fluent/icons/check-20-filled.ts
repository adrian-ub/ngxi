import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCheck20FilledIcon],svg[fluent-check-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.879 5H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.121l-4.44 4.44a1.5 1.5 0 0 1-2.12-2.122zM4 8.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m0 3a.5.5 0 0 1 .5-.5H9a.5.5 0 0 1 0 1H4.5a.5.5 0 0 1-.5-.5m13.854-5.646a.5.5 0 0 0-.708-.708l-5 5a.5.5 0 0 0 .708.708z"></svg:path>`,
})
export class FluentCheck20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
