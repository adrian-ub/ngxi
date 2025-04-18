import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phNumberEightFillIcon],svg[ph-number-eight-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M108 92a20 20 0 1 1 20 20a20 20 0 0 1-20-20m20 36a28 28 0 1 0 28 28a28 28 0 0 0-28-28m88-88v176a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16m-44 116a44 44 0 0 0-20.23-37a36 36 0 1 0-47.54 0A44 44 0 1 0 172 156"></svg:path>`,
})
export class PhNumberEightFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
