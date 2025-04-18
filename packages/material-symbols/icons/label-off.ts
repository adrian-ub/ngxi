import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLabelOffIcon],svg[material-symbols-label-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.925 16.075L6.85 4H15q.475 0 .9.213t.7.587L22 12zM20.5 23.3l-3.975-3.975q-.25.325-.6.5T15.15 20H4q-.825 0-1.412-.587T2 18V6q0-.275.063-.513t.187-.437L.7 3.5l1.4-1.4l19.8 19.8z"></svg:path>`,
})
export class MaterialSymbolsLabelOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
