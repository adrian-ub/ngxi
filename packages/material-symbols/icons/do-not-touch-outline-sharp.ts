import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsDoNotTouchOutlineSharpIcon],svg[material-symbols-do-not-touch-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21 18.15l-2-2V4h2zm-12-12l-2-2V3h2zm4 4l-2-2V1h2zm4 2.025h-2V2h2zM9.525 21h8.65L9 11.825v5.6l-3.7-2.6zm-1.05 2L1.2 12.375l1.725-1.65L7 13.575v-3.75L.675 3.5L2.1 2.075l20.3 20.3l-1.425 1.425l-.8-.8zm5.125-6.6"></svg:path>`,
})
export class MaterialSymbolsDoNotTouchOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
