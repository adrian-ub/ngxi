import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSquareHalfBoldIcon],svg[ph-square-half-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 36H56a20 20 0 0 0-20 20v144a20 20 0 0 0 20 20h144a20 20 0 0 0 20-20V56a20 20 0 0 0-20-20m-60 64h56v16h-56Zm0 40h56v16h-56Zm56-64h-56V60h56ZM60 60h56v136H60Zm80 136v-16h56v16Z"></svg:path>`,
})
export class PhSquareHalfBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
