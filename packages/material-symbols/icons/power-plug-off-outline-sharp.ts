import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsPowerPlugOffOutlineSharpIcon],svg[material-symbols-power-plug-off-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 21v-3L6 14.5V7.075h1.075L9 9H8v4.65l3.5 3.5V19h1v-1.85l.925-.925L1.4 4.2l1.4-1.4l18.4 18.4l-1.4 1.4l-4.95-4.95l-.35.35v3zm7.65-6.7L16 13.15V9h-4.15L8 5.15V3h2v4h4V3h2v4h2v6.45zm-6.45-.775"></svg:path>`,
})
export class MaterialSymbolsPowerPlugOffOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
