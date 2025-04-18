import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSortAscendingFillIcon],svg[ph-sort-ascending-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M72 72h96a8 8 0 0 1 0 16H72a8 8 0 0 1 0-16m40 112H72a8 8 0 0 1 0-16h40a8 8 0 0 1 0 16m8-48H72a8 8 0 0 1 0-16h48a8 8 0 0 1 0 16m77.66 29.66l-24 24a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L160 164.69V120a8 8 0 0 1 16 0v44.69l10.34-10.35a8 8 0 0 1 11.32 11.32"></svg:path>`,
})
export class PhSortAscendingFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
