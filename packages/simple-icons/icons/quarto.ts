import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsQuartoIcon],svg[simple-icons-quarto-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.65 12.854V24c6.042-.325 10.923-5.105 11.33-11.125H12.65Zm-1.504 0H.02c.427 5.94 5.166 10.699 11.105 11.105V12.854Zm1.505-1.505H24C23.675 5.247 18.753.325 12.65 0Zm-1.505 0V0C5.106.427.326 5.308 0 11.35Z"></svg:path>`,
})
export class SimpleIconsQuartoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
