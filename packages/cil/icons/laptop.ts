import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilLaptopIcon],svg[cil-laptop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M440 368a24.03 24.03 0 0 0 24-24V104a24.03 24.03 0 0 0-24-24H72a24.03 24.03 0 0 0-24 24v240a24.03 24.03 0 0 0 24 24ZM80 112h352v224H80ZM16 400h480v32H16z"></svg:path>`,
})
export class CilLaptopIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
