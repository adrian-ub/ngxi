import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsNexonIcon],svg[simple-icons-nexon-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.714 15.358V0L0 5.697v15.358L13.29 24L24 18.303zm-9.495-1.219l7.291 1.568l-7.291 3.832zm11.895 8.578L2.35 20.327l7.454-3.926l10.846 2.406z"></svg:path>`,
})
export class SimpleIconsNexonIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
