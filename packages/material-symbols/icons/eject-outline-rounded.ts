import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEjectOutlineRoundedIcon],svg[material-symbols-eject-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 17h12q.425 0 .713.288T19 18t-.288.713T18 19H6q-.425 0-.712-.288T5 18t.288-.712T6 17m.375-3.55l4.8-7.2q.15-.225.363-.338T12 5.8t.463.113t.362.337l4.8 7.2q.35.5.05 1.025t-.9.525h-9.55q-.6 0-.9-.525t.05-1.025M9.05 13h5.9L12 8.6z"></svg:path>`,
})
export class MaterialSymbolsEjectOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
