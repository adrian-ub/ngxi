import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarTagHorizontalLinearIcon],svg[solar-tag-horizontal-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M10.721 21h2.637c2.227 0 3.341 0 4.27-.533c.93-.532 1.52-1.509 2.701-3.462l.681-1.126c.993-1.643 1.49-2.465 1.49-3.379s-.497-1.736-1.49-3.379l-.68-1.126c-1.181-1.953-1.771-2.93-2.701-3.462C16.699 4 15.585 4 13.358 4h-2.637C6.846 4 4.908 4 3.704 5.245S2.5 8.493 2.5 12.5s0 6.01 1.204 7.255S6.846 21 10.72 21ZM7.5 7.995V17"></svg:path>`,
})
export class SolarTagHorizontalLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
