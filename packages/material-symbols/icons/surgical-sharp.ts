import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSurgicalSharpIcon],svg[material-symbols-surgical-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.4 15.35L8.65 11.6l9.025-9.025l3.75 3.75zM11 21l2-2h9v2zm-5.925 0q-1.15 0-2.213-.45T1 19.3l6.625-6.6L12 17.05L9.75 19.3q-.8.8-1.862 1.25T5.675 21z"></svg:path>`,
})
export class MaterialSymbolsSurgicalSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
