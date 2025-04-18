import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsCameraIndoorSharpIcon],svg[material-symbols-camera-indoor-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 21V9l8-6l8 6v12zm4-4h6v-2l2 1.05v-4.1L14 13v-2H8z"></svg:path>`,
})
export class MaterialSymbolsCameraIndoorSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
