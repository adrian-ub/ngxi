import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhImacIcon],svg[whh-imac-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.046 832h-384v127h96q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5h-320q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5h96V832h-384q-27 0-45.5-19t-18.5-45V64q0-27 18.5-45.5T64.046 0h896q27 0 45.5 18.5t18.5 45.5v704q0 26-18.5 45t-45.5 19m0-768h-896v576h896zm-832 511V127h640z"></svg:path>`,
})
export class WhhImacIcon {
  readonly viewBox = input("0 0 1025 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
