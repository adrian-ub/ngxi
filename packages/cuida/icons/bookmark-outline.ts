import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cuidaBookmarkOutlineIcon],svg[cuida-bookmark-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g class="bookmark-outline"><svg:path fill="currentColor" fill-rule="evenodd" d="M5 6.09A3.09 3.09 0 0 1 8.09 3h7.82A3.09 3.09 0 0 1 19 6.09v13.697c0 1.336-1.597 2.024-2.568 1.107L12 16.71l-4.432 4.185c-.97.918-2.568.229-2.568-1.107V6.091ZM8.09 5A1.09 1.09 0 0 0 7 6.09v12.59l3.954-3.735a1.523 1.523 0 0 1 2.091 0L17 18.68V6.09A1.09 1.09 0 0 0 15.91 5z" class="Vector" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class CuidaBookmarkOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
