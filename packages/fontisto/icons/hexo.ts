import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoHexoIcon],svg[fontisto-hexo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.435 0L0 6.052v12l10.435 5.953l10.435-6.052V5.948zm4.803 17.109l-.939.521l-.939-.521V12.94H7.515v4.174l-.94.521l-.94-.521V6.887l.939-.521l.939.521v4.174h5.843V6.887l.94-.521l.938.521z"></svg:path>`,
})
export class FontistoHexoIcon {
  readonly viewBox = input("0 0 21 24")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
