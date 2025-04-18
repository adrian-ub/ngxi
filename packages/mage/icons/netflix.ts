import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageNetflixIcon],svg[mage-netflix-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.518 13.187V21.5a5 5 0 0 0-1.783-.192a6.5 6.5 0 0 0-1.907.192v-19zM17.172 2.5v18.863l-3.389-9.603V2.5z"></svg:path><svg:path fill="currentColor" d="M6.828 2.5h3.69l6.654 18.89a18.7 18.7 0 0 0-3.786 0C12.836 19.936 6.828 2.5 6.828 2.5"></svg:path>`,
})
export class MageNetflixIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
