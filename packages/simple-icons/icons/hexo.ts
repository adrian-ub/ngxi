import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsHexoIcon],svg[simple-icons-hexo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.02 0L1.596 6.02l-.02 12L11.978 24l10.426-6.02l.02-12zm4.828 17.14l-.96.558l-.969-.574V12.99H9.081v4.15l-.96.558l-.969-.574V6.854l.964-.552l.965.563v4.145h5.838V6.86l.965-.552l.964.563z"></svg:path>`,
})
export class SimpleIconsHexoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
