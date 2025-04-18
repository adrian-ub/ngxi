import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciLeafIcon],svg[ci-leaf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.83 17.08c7.07 4.243 12.727-1.414 12.02-12.02C8.244 4.353 2.587 10.01 6.83 17.08m0 0q0 0 0 0m0 0L5 18.91m1.83-1.828l3.827-3.829"></svg:path>`,
})
export class CiLeafIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
