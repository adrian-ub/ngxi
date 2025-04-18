import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSwitchCameraOutlineSharpIcon],svg[material-symbols-switch-camera-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 21V5h5.15L9 3h6l1.85 2H22v16zm2-2h16V7h-4.05l-1.825-2h-4.25L8.05 7H4zm5-2l1.4-1.4l-1.55-1.55h6.3L13.6 15.6L15 17l4-4l-4-4l-1.4 1.4l1.6 1.65H8.8l1.6-1.65L9 9l-4 4z"></svg:path>`,
})
export class MaterialSymbolsSwitchCameraOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
