import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonTornadoIcon],svg[carbon-tornado-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 26h4v2h-4zm-4-4h6v2h-6zm-4-4h10v2H8zm0-4h12v2H8zm2-4h14v2H10zM8 6h18v2H8z"></svg:path>`,
})
export class CarbonTornadoIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
