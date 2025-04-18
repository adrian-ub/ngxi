import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosCrateioIcon],svg[logos-crateio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#009DC7" d="M192 64V0h-64v64H0v64h64v64h64v-64h128V64z"></svg:path>`,
})
export class LogosCrateioIcon {
  readonly viewBox = input("0 0 256 192")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
