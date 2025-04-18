import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPicnicTableFillIcon],svg[ph-picnic-table-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m146.85 96l14.54 32H94.61l14.54-32ZM232 56v144a16 16 0 0 1-16 16H40a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16m-24 80a8 8 0 0 0-8-8h-21l-14.58-32H176a8 8 0 0 0 0-16H80a8 8 0 0 0 0 16h11.58L77 128H56a8 8 0 0 0 0 16h13.76l-13 28.69a8 8 0 1 0 14.56 6.62l16-35.31h81.34l16.05 35.31a8 8 0 0 0 14.56-6.62l-13-28.69H200a8 8 0 0 0 8-8"></svg:path>`,
})
export class PhPicnicTableFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
