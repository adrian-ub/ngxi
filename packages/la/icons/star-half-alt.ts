import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laStarHalfAltIcon],svg[la-star-half-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 2.375l-.906 2.031l-3.25 7.313l-7.938.812l-2.25.25l1.688 1.5l5.906 5.344l-1.656 7.813l-.469 2.187h.031L9.094 28.5L16 24.531l6.906 3.969l1.969 1.125l-.469-2.188l-1.656-7.812l5.906-5.344l1.688-1.5l-2.25-.25l-7.938-.812l-3.25-7.313zm0 4.906l2.563 5.782l.25.5l.562.062l6.313.656l-4.72 4.25l-.437.375l.125.563l1.313 6.187L16.5 22.5l-.5-.281z"></svg:path>`,
})
export class LaStarHalfAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
