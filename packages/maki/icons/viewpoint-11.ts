import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiViewpoint11Icon],svg[maki-viewpoint-11-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M4.403 5.777a.852.852 0 0 0-.183.215L.75 3.322a5.78 5.78 0 0 1 1.1-1.11zM9.15 2.222l-2.544 3.56a1.379 1.379 0 0 1 .184.2l3.47-2.66a5.78 5.78 0 0 0-1.11-1.1zM5.37 7.009a1 1 0 1 0 1.122.86a1 1 0 0 0-1.122-.86zm-.65-5.987a5.774 5.774 0 0 0-1.52.41l1.768 4.003a.815.815 0 0 1 .238-.061zm1.56.01l-.454 4.353a.761.761 0 0 1 .206.044L7.79 1.431a5.519 5.519 0 0 0-1.51-.4z" fill="currentColor"></svg:path>`,
})
export class MakiViewpoint11Icon {
  readonly viewBox = input("0 0 11 11")
  readonly width = input("1em")
  readonly height = input("1em")
}
