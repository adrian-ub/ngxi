import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phHashFillIcon],svg[ph-hash-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M116.25 112h31.5l-8 32h-31.5ZM224 48v160a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16m-16 56a8 8 0 0 0-8-8h-31.75l7.51-30.06a8 8 0 0 0-15.52-3.88L151.75 96h-31.5l7.51-30.06a8 8 0 0 0-15.52-3.88L103.75 96H64a8 8 0 0 0 0 16h35.75l-8 32H56a8 8 0 0 0 0 16h31.75l-7.51 30.06a8 8 0 0 0 5.82 9.7a8 8 0 0 0 2 .24a8 8 0 0 0 7.75-6.06l8.44-33.94h31.5l-7.51 30.06a8 8 0 0 0 5.82 9.7a8 8 0 0 0 1.94.24a8 8 0 0 0 7.75-6.06l8.5-33.94H192a8 8 0 0 0 0-16h-35.75l8-32H200a8 8 0 0 0 8-8"></svg:path>`,
})
export class PhHashFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
