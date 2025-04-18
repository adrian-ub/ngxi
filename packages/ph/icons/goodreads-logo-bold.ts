import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phGoodreadsLogoBoldIcon],svg[ph-goodreads-logo-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 20a12 12 0 0 0-12 12v4.22A67.94 67.94 0 0 0 60 88v24a67.94 67.94 0 0 0 112 51.78V168a44.05 44.05 0 0 1-44 44c-15 0-30.29-7.58-38.16-18.87a12 12 0 0 0-19.68 13.74C82.5 224.56 105.21 236 128 236a68.07 68.07 0 0 0 68-68V32a12 12 0 0 0-12-12m-56 136a44.05 44.05 0 0 1-44-44V88a44 44 0 0 1 88 0v24a44.05 44.05 0 0 1-44 44"></svg:path>`,
})
export class PhGoodreadsLogoBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
