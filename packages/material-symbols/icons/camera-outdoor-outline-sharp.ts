import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsCameraOutdoorOutlineSharpIcon],svg[material-symbols-camera-outdoor-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 18v-6h6v2l2-1.05v4.1L18 16v2zm-8 3V9l8-6l8 6v2h-2v-1l-6-4.5L6 10v9h14v2zm8-8.75"></svg:path>`,
})
export class MaterialSymbolsCameraOutdoorOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
