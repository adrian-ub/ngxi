import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsCollectionLineIcon],svg[majesticons-collection-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M6 18a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-.17A3.001 3.001 0 0 0 20 15v-.17A3.001 3.001 0 0 0 22 12V6a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v6c0 1.306.835 2.418 2 2.83V15c0 1.306.835 2.418 2 2.83V18zm2 0h8a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1zm-2-3h12a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm-1-2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H5z"></svg:path></svg:g>`,
})
export class MajesticonsCollectionLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
