import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsWishIcon],svg[simple-icons-wish-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.864 19.826h-4.107l-3.227-9.393l-2.28 9.39H5.143L0 4.65h4.217l4.354 13.128c1.558-4.4 2.534-8.5 1.021-13.128H13.7ZM20.57 4.174a15.7 15.7 0 0 1-3.425 4.171a17.1 17.1 0 0 1 3.425 5.56A17.1 17.1 0 0 1 24 8.345a15.7 15.7 0 0 1-3.43-4.17Z"></svg:path>`,
})
export class SimpleIconsWishIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
