import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsUnknownMedIcon],svg[material-symbols-unknown-med-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 13q-.625 0-1.062-.437T2 11.5t.438-1.062T3.5 10h6q.625 0 1.063.438T11 11.5t-.437 1.063T9.5 13zm11 0q-.625 0-1.062-.437T13 11.5t.438-1.062T14.5 10h6q.625 0 1.063.438T22 11.5t-.437 1.063T20.5 13z"></svg:path>`,
})
export class MaterialSymbolsUnknownMedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
