import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatUiFlowerIcon],svg[flat-ui-flower-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#EDF0F1" d="M50 0c27.613 0 50 22.386 50 50s-22.387 50-50 50C22.386 100 0 77.614 0 50S22.386 0 50 0"></svg:path><svg:defs><svg:circle id="flatUiFlower0" cx="50" cy="50" r="50"></svg:circle></svg:defs><svg:clippath id="flatUiFlower1"><svg:use href="#flatUiFlower0"></svg:use></svg:clippath><svg:g clip-path="url(#flatUiFlower1)"><svg:path fill="#25AE5F" d="M72.964 65.034s-6.233-2.373-8.61 0l-3.588 3.58a6.06 6.06 0 0 0-.729 7.702L52 83.777V55h-4v66h4V86.508l9.432-8.758c2.385 1.789 5.774 1.623 7.944-.543l3.588-3.58c2.378-2.373 0-8.593 0-8.593"></svg:path><svg:path fill="#C03A2B" d="M30 33h20L40 21zm30-12L50 33h20z"></svg:path><svg:path fill="#1F8B4D" d="M48 57h4v4h-4zm16.354 8.034l-3.588 3.58a6.06 6.06 0 0 0-.729 7.702l-.018.016l.844.803l12.101-12.101s-6.234-2.373-8.61 0"></svg:path><svg:path fill="#E64B3C" d="M70 21v17c0 11.046-8.954 20-20 20s-20-8.954-20-20V21l9.958 10l10.018-10l9.965 10z"></svg:path><svg:path fill="#EB675A" d="M50 21.023V58c11.046 0 20-8.954 20-20V21L59.941 31z"></svg:path></svg:g>`,
})
export class FlatUiFlowerIcon {
  readonly viewBox = input("0 0 100 100")
  readonly width = input("1em")
  readonly height = input("1em")
}
