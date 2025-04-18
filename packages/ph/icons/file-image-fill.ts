import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phFileImageFillIcon],svg[ph-file-image-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M158.66 219.56A8 8 0 0 1 152 232H24a8 8 0 0 1-6.73-12.33l36-56a8 8 0 0 1 13.46 0l9.76 15.18l20.85-31.29a8 8 0 0 1 13.32 0ZM216 88v128a16 16 0 0 1-16 16h-8a8 8 0 0 1 0-16h8V96h-48a8 8 0 0 1-8-8V40H56v88a8 8 0 0 1-16 0V40a16 16 0 0 1 16-16h96a8 8 0 0 1 5.66 2.34l56 56A8 8 0 0 1 216 88m-56-8h28.69L160 51.31Z"></svg:path>`,
})
export class PhFileImageFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
