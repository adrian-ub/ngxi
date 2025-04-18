import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSupersetOfThinIcon],svg[ph-superset-of-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212 200a4 4 0 0 1-4 4H56a4 4 0 0 1 0-8h152a4 4 0 0 1 4 4m-60-44H56a4 4 0 0 0 0 8h96a60 60 0 0 0 0-120H56a4 4 0 0 0 0 8h96a52 52 0 0 1 0 104"></svg:path>`,
})
export class PhSupersetOfThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
