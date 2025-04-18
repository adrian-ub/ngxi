import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsStarIcon],svg[majesticons-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M12.897 2.557a1 1 0 0 0-1.794 0L8.691 7.445l-5.394.784a1 1 0 0 0-.555 1.706l3.904 3.805l-.922 5.372a1 1 0 0 0 1.451 1.054L12 17.63l4.825 2.536a1 1 0 0 0 1.45-1.054l-.92-5.372l3.902-3.805a1 1 0 0 0-.554-1.706l-5.394-.784l-2.412-4.888z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsStarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
