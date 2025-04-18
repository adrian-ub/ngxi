import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsForward10SharpIcon],svg[material-symbols-forward-10-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 16v-4.5H7.5V10h3v6zm2.5 0v-6h4v6zm1.5-1.5h1v-3h-1zM12 22q-1.875 0-3.512-.712t-2.85-1.925t-1.925-2.85T3 13t.713-3.512t1.924-2.85t2.85-1.925T12 4h.15L10.6 2.45L12 1l4 4l-4 4l-1.4-1.45L12.15 6H12Q9.075 6 7.038 8.038T5 13t2.038 4.963T12 20t4.963-2.037T19 13h2q0 1.875-.712 3.513t-1.925 2.85t-2.85 1.925T12 22"></svg:path>`,
})
export class MaterialSymbolsForward10SharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
