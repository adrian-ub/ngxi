import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhJIcon],svg[whh-j-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 768q0 106-75 181t-181 75H256q-106 0-181-75T0 768q0-26 19-45t45.5-19t45 18.5T128 768q0 53 37.5 90.5T256 896h256q53 0 90.5-37.5T640 768V64q0-26 19-45t45.5-19t45 19T768 64z"></svg:path>`,
})
export class WhhJIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}
