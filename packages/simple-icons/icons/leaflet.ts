import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsLeafletIcon],svg[simple-icons-leaflet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.69 0c-.355.574-8.432 4.74-10.856 8.649c-2.424 3.91-3.116 6.988-2.237 9.882s2.559 2.763 3.516 3.717c.958.954 2.257 2.113 4.332 1.645c2.717-.613 5.335-2.426 6.638-7.508s.448-9.533-.103-11.99A35 35 0 0 0 17.69 0m-.138.858l-9.22 21.585l-.574-.577Z"></svg:path>`,
})
export class SimpleIconsLeafletIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
