import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ls9Icon],svg[ls-9-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m82 743l186-292c-13 2-27 4-41 4C101 455 0 353 0 228C0 102 101 0 227 0c105 0 194 73 220 171c4 17 8 38 8 57c0 43-13 82-33 116l-7 11l-273 427zm266-417l19-29c11-22 16-44 16-69c0-86-70-157-156-157S71 142 71 228s70 155 156 155c49 0 92-22 121-57"></svg:path>`,
})
export class Ls9Icon {
  readonly viewBox = input("0 0 455 782")
  readonly width = input("0.59em")
  readonly height = input("1em")
}
