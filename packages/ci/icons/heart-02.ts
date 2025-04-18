import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciHeart02Icon],svg[ci-heart-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.237 6.237a4.1 4.1 0 0 1 .135 5.654l-7.373 8.11l-7.37-8.11a4.098 4.098 0 1 1 6.23-5.316L12 8l1.14-1.425a4.1 4.1 0 0 1 6.097-.338"></svg:path>`,
})
export class CiHeart02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
