import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHideSourceRoundedIcon],svg[material-symbols-hide-source-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.075 21.9L17.5 20.35q-1.225.8-2.613 1.225T12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12q0-1.5.425-2.887T3.65 6.5L2.075 4.925q-.3-.3-.3-.712t.3-.713t.713-.3t.712.3l17 17q.3.3.3.7t-.3.7t-.712.3t-.713-.3m.1-5.575l-11.5-11.5q-.45-.45-.362-1.075t.662-.9q.95-.425 1.963-.638T12 2q2.075 0 3.9.788t3.175 2.137T21.213 8.1T22 12q0 1.05-.213 2.063t-.637 1.962q-.275.575-.887.675t-1.088-.375"></svg:path>`,
})
export class MaterialSymbolsHideSourceRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
