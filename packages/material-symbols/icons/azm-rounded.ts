import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsAzmRoundedIcon],svg[material-symbols-azm-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 9v6.8q0 .35.3.475t.55-.125l2.575-2.575q.275-.275.425-.637t.15-.763V6q0-.825-.587-1.412T18 4h-6.175q-.4 0-.762.15t-.638.425L7.85 7.15q-.25.25-.125.55T8.2 8H15q.425 0 .713.288T16 9m-6 6v6.8q0 .35.3.475t.55-.125l2.575-2.575q.275-.275.425-.637t.15-.763V12q0-.825-.587-1.412T12 10H5.825q-.4 0-.763.15t-.637.425L1.85 13.15q-.25.25-.125.55t.475.3H9q.425 0 .713.288T10 15"></svg:path>`,
})
export class MaterialSymbolsAzmRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
