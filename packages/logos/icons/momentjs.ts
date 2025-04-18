import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosMomentjsIcon],svg[logos-momentjs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill-rule="evenodd"><svg:path fill="#376660" d="M128 256c70.692 0 128-57.308 128-128S198.692 0 128 0S0 57.308 0 128s57.308 128 128 128m0-19.2c-60.089 0-108.8-48.711-108.8-108.8S67.911 19.2 128 19.2S236.8 67.911 236.8 128S188.089 236.8 128 236.8"></svg:path><svg:path fill="#529990" d="M128 230.4c56.554 0 102.4-45.846 102.4-102.4S184.554 25.6 128 25.6S25.6 71.446 25.6 128S71.446 230.4 128 230.4M128 32c-3.535 0-6.4 2.88-6.4 6.444V121.6H76.781A6.375 6.375 0 0 0 70.4 128c0 3.535 2.916 6.4 6.37 6.4h57.63V38.406A6.387 6.387 0 0 0 128 32"></svg:path></svg:g>`,
})
export class LogosMomentjsIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
