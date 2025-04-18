import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsDoNotTouchSharpIcon],svg[material-symbols-do-not-touch-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21 18.15l-5.975-5.975H15V2h2v10.175h2V4h2zm-8-8l-2-2V1h2zm-4-4l-2-2V3h2zM8.475 23L1.2 12.375l1.725-1.65L7 13.575v-3.75L.675 3.5L2.1 2.075l20.3 20.3l-1.425 1.425l-.8-.8z"></svg:path>`,
})
export class MaterialSymbolsDoNotTouchSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
