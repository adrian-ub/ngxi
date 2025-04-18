import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsPlusIcon],svg[ls-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M438 279h279v159H438v277H279V438H0V279h279V0h159z"></svg:path>`,
})
export class LsPlusIcon {
  readonly viewBox = input("0 0 717 715")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
