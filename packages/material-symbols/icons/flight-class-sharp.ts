import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFlightClassSharpIcon],svg[material-symbols-flight-class-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 13V4h6v9zm6 5H8L5 8V4h2v4l2.5 8H18zM8 21v-2h10v2z"></svg:path>`,
})
export class MaterialSymbolsFlightClassSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
