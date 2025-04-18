import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFlightClassOutlineSharpIcon],svg[material-symbols-flight-class-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 13V4h6v9zm2-2h2V6h-2zm4 7H8L5 8V4h2v4l2.5 8H18zM8 21v-2h10v2zm6-15h2z"></svg:path>`,
})
export class MaterialSymbolsFlightClassOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
