import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMoveSelectionUpRoundedIcon],svg[material-symbols-light-move-selection-up-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.577 13.077q-.667 0-1.141-.474t-.475-1.141V4.616q0-.667.475-1.141T8.577 3h6.846q.667 0 1.141.475t.475 1.14v6.847q0 .666-.475 1.14t-1.141.475zm-1 3.962q-.261 0-.438-.177t-.178-.439t.177-.438t.439-.177t.439.177t.176.438t-.177.439t-.438.177m0 3.961q-.262 0-.439-.177t-.177-.438t.177-.439t.439-.177t.438.177t.177.439t-.177.438t-.438.177M12 21q-.261 0-.438-.177t-.177-.438t.177-.439t.438-.177t.439.177t.176.438q0 .262-.177.439T12 21m4.423 0q-.261 0-.438-.177t-.177-.438t.177-.439q.177-.177.438-.177t.439.177t.177.438t-.177.439t-.439.177m0-3.962q-.261 0-.438-.177t-.177-.438t.177-.438t.438-.177t.439.176t.177.439t-.177.439t-.439.177"></svg:path>`,
})
export class MaterialSymbolsLightMoveSelectionUpRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
