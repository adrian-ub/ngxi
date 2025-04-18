import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSupersetOfBoldIcon],svg[ph-superset-of-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M220 200a12 12 0 0 1-12 12H56a12 12 0 0 1 0-24h152a12 12 0 0 1 12 12m-68-52H56a12 12 0 0 0 0 24h96a68 68 0 0 0 0-136H56a12 12 0 0 0 0 24h96a44 44 0 0 1 0 88"></svg:path>`,
})
export class PhSupersetOfBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
