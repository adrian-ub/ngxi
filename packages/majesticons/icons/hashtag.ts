import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsHashtagIcon],svg[majesticons-hashtag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M5 1a4 4 0 0 0-4 4v14a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5zm7.316 4.051a1 1 0 0 1 .633 1.265L12.054 9h1.892l1.105-3.316a1 1 0 0 1 1.898.632L16.054 9H19a1 1 0 1 1 0 2h-3.613l-.666 2H17a1 1 0 1 1 0 2h-2.946l-1.105 3.316a1 1 0 0 1-1.898-.632L11.946 15h-1.892L8.95 18.316a1 1 0 1 1-1.898-.632L7.946 15H5a1 1 0 1 1 0-2h3.613l.666-2H7a1 1 0 1 1 0-2h2.946l1.105-3.316a1 1 0 0 1 1.265-.633zM10.721 13l.666-2h1.892l-.666 2H10.72z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsHashtagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
