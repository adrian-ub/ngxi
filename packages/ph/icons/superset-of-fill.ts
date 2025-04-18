import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSupersetOfFillIcon],svg[ph-superset-of-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-32 152H80a8 8 0 0 1 0-16h96a8 8 0 0 1 0 16m-32-32H80a8 8 0 0 1 0-16h64a24 24 0 0 0 0-48H80a8 8 0 0 1 0-16h64a40 40 0 0 1 0 80"></svg:path>`,
})
export class PhSupersetOfFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
