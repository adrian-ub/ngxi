import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightChessOutlineSharpIcon],svg[material-symbols-light-chess-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.77 19.23h12.46v-1.94H5.77zm2.684-2.941h7.092l-.69-4.789H9.144zM4.769 20.23v-3.943h2.685l.685-4.788h-2.37v-1h12.462v1h-2.37l.685 4.789h2.685v3.942zm3.333-9.73L6.615 3.77q.71.451 1.327.703q.616.252 1.356.252q.827 0 1.501-.272T12 3.75q.527.43 1.202.703t1.48.272q.685 0 1.282-.242q.596-.243 1.44-.714L15.898 10.5h-1.03l1.128-4.998q-.288.096-.63.16q-.341.063-.76.063q-.696 0-1.362-.179T12 5.021q-.571.346-1.238.525t-1.364.179q-.411 0-.749-.044t-.626-.14l1.11 4.959zM12 19.23"></svg:path>`,
})
export class MaterialSymbolsLightChessOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
