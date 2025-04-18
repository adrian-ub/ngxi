import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiSmartphoneIcon],svg[zmdi-smartphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 6q18 0 30.5 12T299 48v384q0 18-12.5 30.5T256 475H43q-18 0-30.5-12.5T0 432V48q0-18 12.5-30.5T43 5zm0 383V91H43v298z"></svg:path>`,
})
export class ZmdiSmartphoneIcon {
  readonly viewBox = input("0 0 304 480")
  readonly width = input("0.64em")
  readonly height = input("1em")
}
