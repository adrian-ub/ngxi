import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bytesizeStarIcon],svg[bytesize-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m16 2l4 10h10l-8 7l3 11l-9-7l-9 7l3-11l-8-7h10Z"></svg:path>`,
})
export class BytesizeStarIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
