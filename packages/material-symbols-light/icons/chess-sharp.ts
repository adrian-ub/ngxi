import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightChessSharpIcon],svg[material-symbols-light-chess-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.77 20.23v-3.942h2.684l.685-4.788h-2.37v-1h12.462v1h-2.37l.685 4.789h2.685v3.942zM7.911 9.616L6.615 3.77q.71.452 1.325.704q.616.252 1.358.252q.827 0 1.501-.272T12 3.75q.527.43 1.201.703t1.482.272q.684 0 1.28-.242q.597-.243 1.44-.714l-1.309 5.847z"></svg:path>`,
})
export class MaterialSymbolsLightChessSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
