import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosCodebeatIcon],svg[logos-codebeat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#27A8E0" d="m57.697 89.561l27.92 58.238l51.045-116.244l56.305 138.983l17.943-40.372H256V128C256 57.31 198.69 0 128 0S0 57.31 0 128v2.166h36.97zM192.58 203.176L135.811 93.428l-50.503 90.877l-28.075-64.735l-13.69 26.915H1.315C10.286 208.435 63.575 256 128 256s117.79-47.642 126.685-109.593h-35.267z"></svg:path>`,
})
export class LogosCodebeatIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
