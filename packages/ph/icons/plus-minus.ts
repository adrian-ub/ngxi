import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPlusMinusIcon],svg[ph-plus-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m205.66 61.66l-144 144a8 8 0 0 1-11.32-11.32l144-144a8 8 0 0 1 11.32 11.32M64 112a8 8 0 0 0 16 0V80h32a8 8 0 0 0 0-16H80V32a8 8 0 0 0-16 0v32H32a8 8 0 0 0 0 16h32Zm160 64h-80a8 8 0 0 0 0 16h80a8 8 0 0 0 0-16"></svg:path>`,
})
export class PhPlusMinusIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
