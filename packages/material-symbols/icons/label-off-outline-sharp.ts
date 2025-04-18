import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLabelOffOutlineSharpIcon],svg[material-symbols-label-off-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.925 16.075L17.5 14.65l2-2.65L15 6H8.85l-2-2H16l6 8zM4 18h11.2L4 6.8zm16.5 5.3L17.2 20H2V4.8L.7 3.5l1.4-1.4l19.8 19.8zM9.6 12.4"></svg:path>`,
})
export class MaterialSymbolsLabelOffOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
