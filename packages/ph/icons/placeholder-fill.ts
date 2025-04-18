import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPlaceholderFillIcon],svg[ph-placeholder-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-20.69 155.31a8 8 0 0 1-11.31 0L68.69 80A8 8 0 0 1 80 68.69L187.31 176a8 8 0 0 1 0 11.31"></svg:path>`,
})
export class PhPlaceholderFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
