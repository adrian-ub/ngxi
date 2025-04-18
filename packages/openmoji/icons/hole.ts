import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiHoleIcon],svg[openmoji-hole-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:ellipse cx="36" cy="36" fill="#3F3F3F" rx="32.5" ry="13.5"></svg:ellipse><svg:path fill="#9B9B9A" d="M36 32.5c13.52 0 25.107 3.303 30.005 8c1.605-1.54 2.495-3.228 2.495-5c0-7.18-14.55-13-32.5-13s-32.5 5.82-32.5 13c0 1.772.89 3.46 2.495 5c4.898-4.697 16.486-8 30.005-8"></svg:path><svg:g fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2"><svg:ellipse cx="36" cy="36" rx="32.5" ry="13.5"></svg:ellipse><svg:path d="M36 32.5c13.52 0 25.107 3.303 30.005 8c1.605-1.54 2.495-3.228 2.495-5c0-7.18-14.55-13-32.5-13s-32.5 5.82-32.5 13c0 1.772.89 3.46 2.495 5c4.898-4.697 16.486-8 30.005-8z"></svg:path></svg:g>`,
})
export class OpenmojiHoleIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
