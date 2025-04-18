import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightInkMarkerSharpIcon],svg[material-symbols-light-ink-marker-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.839 20.016l-.835-.835L4.6 20.585l-1.135-1.158l1.393-1.392l-.835-.846l13.21-13.21l2.826 2.827zm4.261-8.477l-5.661 5.65L6.85 18.6l5.65-5.661z"></svg:path>`,
})
export class MaterialSymbolsLightInkMarkerSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
