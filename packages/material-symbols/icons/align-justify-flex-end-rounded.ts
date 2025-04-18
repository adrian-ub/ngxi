import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsAlignJustifyFlexEndRoundedIcon],svg[material-symbols-align-justify-flex-end-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 22q-.425 0-.712-.288T20 21V3q0-.425.288-.712T21 2t.713.288T22 3v18q0 .425-.288.713T21 22m-6-5q-.425 0-.712-.288T14 16V8q0-.425.288-.712T15 7h1q.425 0 .713.288T17 8v8q0 .425-.288.713T16 17zm-6 0q-.425 0-.712-.288T8 16V8q0-.425.288-.712T9 7h1q.425 0 .713.288T11 8v8q0 .425-.288.713T10 17z"></svg:path>`,
})
export class MaterialSymbolsAlignJustifyFlexEndRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
