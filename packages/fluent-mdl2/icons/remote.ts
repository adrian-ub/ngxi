import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2RemoteIcon],svg[fluent-mdl2-remote-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m259 733l90-90l701 701l-701 701l-90-90l611-611zM1789 93l-611 611l611 611l-90 90l-701-701L1699 3z"></svg:path>`,
})
export class FluentMdl2RemoteIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
