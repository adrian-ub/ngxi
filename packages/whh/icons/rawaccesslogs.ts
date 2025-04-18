import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhRawaccesslogsIcon],svg[whh-rawaccesslogs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m895.85 639l-799 1q-13 0-22.5 9.5t-9.5 23t9.5 22.5t22.5 9h416v64h-416q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5h416v191h-448q-27 0-45.5-18.5T.85 959V64q0-27 18.5-45.5T64.85 0h767q27 0 45.5 18.5t18.5 45.5zm-96-510h-703q-13 0-22.5 9t-9.5 22.5t9.5 23t22.5 9.5h703q14 0 23-9.5t9-23t-9-22.5t-23-9m0 128h-703q-13 0-22.5 9t-9.5 22.5t9.5 23t22.5 9.5h703q14 0 23-9.5t9-23t-9-22.5t-23-9m0 127h-703q-13 0-22.5 9.5t-9.5 23t9.5 22.5t22.5 9h703q14 0 23-9t9-22.5t-9-23t-23-9.5m0 128h-703q-13 0-22.5 9.5t-9.5 23t9.5 22.5t22.5 9h703q14 0 23-9t9-22.5t-9-23t-23-9.5m77 237l-256 257q-18 18-44 18V703h319q0 27-19 46"></svg:path>`,
})
export class WhhRawaccesslogsIcon {
  readonly viewBox = input("0 0 896 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
