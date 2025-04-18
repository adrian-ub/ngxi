import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMoveSelectionLeftRoundedIcon],svg[material-symbols-light-move-selection-left-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.616 17.039q-.667 0-1.141-.475T3 15.423V8.577q0-.667.475-1.141t1.14-.475h6.847q.666 0 1.14.475t.475 1.141v6.846q0 .667-.474 1.141t-1.141.475zm11.807 0q-.261 0-.438-.178q-.177-.177-.177-.438t.177-.438t.438-.177t.439.176t.177.439t-.177.439t-.439.177m3.962 0q-.262 0-.439-.178q-.177-.177-.177-.438t.177-.438t.439-.177t.438.176t.177.439t-.177.439t-.438.177m0-4.424q-.262 0-.439-.177T19.77 12t.177-.438t.439-.177t.438.177T21 12t-.177.439t-.438.176m0-4.423q-.262 0-.439-.177t-.177-.438t.177-.439t.438-.177q.262 0 .439.177t.177.439t-.177.438t-.438.177m-3.962 0q-.261 0-.438-.177t-.177-.438t.176-.439q.177-.177.439-.177t.439.177t.177.439t-.178.438t-.438.177"></svg:path>`,
})
export class MaterialSymbolsLightMoveSelectionLeftRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
