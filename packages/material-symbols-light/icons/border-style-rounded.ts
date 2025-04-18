import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBorderStyleRoundedIcon],svg[material-symbols-light-border-style-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.385 8.923q-.262 0-.439-.177t-.177-.438t.177-.439t.439-.177t.438.177q.177.177.177.439t-.177.438t-.438.177m0 3.693q-.262 0-.439-.177T18.77 12t.177-.438t.439-.177t.438.177T20 12t-.177.439q-.177.176-.438.176m0 3.693q-.262 0-.439-.177t-.177-.439t.177-.438t.438-.177q.262 0 .439.177t.177.438t-.177.439t-.438.177M8.308 20q-.262 0-.439-.177t-.177-.438t.177-.439t.439-.177t.438.177t.177.438t-.177.439t-.438.177M12 20q-.261 0-.438-.177t-.177-.438t.177-.439t.438-.177t.439.177t.176.438q0 .262-.177.439T12 20m3.692 0q-.261 0-.438-.177t-.177-.438t.177-.439t.438-.177t.439.177t.177.438t-.177.439t-.439.177m3.692 0q-.261 0-.438-.177t-.177-.438t.177-.439t.438-.177t.439.177t.177.438q0 .262-.177.439t-.438.177M4 19.5V5.616q0-.667.475-1.141T5.615 4H19.5q.213 0 .356.144t.144.357t-.144.356T19.5 5H5.616q-.27 0-.443.173T5 5.616V19.5q0 .213-.144.356T4.499 20t-.356-.144T4 19.5"></svg:path>`,
})
export class MaterialSymbolsLightBorderStyleRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
