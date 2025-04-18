import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[famiconsPrismSharpIcon],svg[famicons-prism-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 16L16 352l240 144l240-144Zm-20 96.82v324.53L73.73 340Z"></svg:path>`,
})
export class FamiconsPrismSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
