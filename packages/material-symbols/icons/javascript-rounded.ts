import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsJavascriptRoundedIcon],svg[material-symbols-javascript-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 15q-.625 0-1.062-.437T6 13.5v-.25q0-.325.213-.537t.537-.213t.538.213t.212.537v.25H9V9.75q0-.325.213-.537T9.75 9t.538.213t.212.537v3.75q0 .625-.437 1.063T9 15zm5.5 0q-.425 0-.712-.288T12 14v-.5q0-.2.15-.35t.35-.15h.5q.2 0 .35.15t.15.35h2v-1H13q-.425 0-.712-.288T12 11.5V10q0-.425.288-.712T13 9h3q.425 0 .713.288T17 10v.5q0 .2-.15.35t-.35.15H16q-.2 0-.35-.15t-.15-.35h-2v1H16q.425 0 .713.288T17 12.5V14q0 .425-.288.713T16 15z"></svg:path>`,
})
export class MaterialSymbolsJavascriptRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
