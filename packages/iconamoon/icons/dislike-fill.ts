import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonDislikeFillIcon],svg[iconamoon-dislike-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.277 19.219A4 4 0 0 0 14.606 21h.213a2 2 0 0 0 1.973-2.329L16.18 15h2.38a3 3 0 0 0 2.942-3.588l-1.2-6A3 3 0 0 0 17.36 3H6a3 3 0 0 0-3 3v8a1 1 0 0 0 1 1h3.93a1 1 0 0 1 .832.445zM7 5v8H5V6a1 1 0 0 1 1-1z" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonDislikeFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
