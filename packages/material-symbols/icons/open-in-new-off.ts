import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsOpenInNewOffIcon],svg[material-symbols-open-in-new-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.775 22.625L18.15 21H5q-.825 0-1.412-.587T3 19V5.85L1.375 4.225L2.8 2.8l18.4 18.4zM5 19h11.15l-4.875-4.875L9.7 15.7l-1.4-1.4l1.575-1.575L5 7.85zM7.85 5l-2-2H12v2zm6.275 6.275l-1.4-1.4L17.6 5H14V3h7v7h-2V6.4zM21 18.15l-2-2V12h2z"></svg:path>`,
})
export class MaterialSymbolsOpenInNewOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
