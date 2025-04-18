import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsCameraOutdoorSharpIcon],svg[material-symbols-camera-outdoor-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 21V9l8-6l8 6v2h-9v8h9v2zm8-3v-6h6v2l2-1.05v4.1L18 16v2z"></svg:path>`,
})
export class MaterialSymbolsCameraOutdoorSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
