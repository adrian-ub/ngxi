import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiHeart11Icon],svg[maki-heart-11-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M10.06 4.76a27 27 0 0 1-4.2 5.36a.49.49 0 0 1-.71 0A27.003 27.003 0 0 1 .94 4.76C-.88 1.12 3.74-1.31 5.5 2.33c1.76-3.64 6.38-1.21 4.56 2.43z" fill="currentColor"></svg:path>`,
})
export class MakiHeart11Icon {
  readonly viewBox = input("0 0 11 11")
  readonly width = input("1em")
  readonly height = input("1em")
}
