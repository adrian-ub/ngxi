import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsTrailforksIcon],svg[simple-icons-trailforks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1.608L0 22.392h24zm-1.292 5.698h2.584v5.885l2.664 1.917v5.587h-2.204V16.05L12 14.788l-1.752 1.262v4.645H8.044v-5.587l2.664-1.917z"></svg:path>`,
})
export class SimpleIconsTrailforksIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
