import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneLargeOrangeDiamondIcon],svg[emojione-large-orange-diamond-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#f27a52" d="M2.018 32L32 2.019l29.981 29.98L32 61.982z"></svg:path>`,
})
export class EmojioneLargeOrangeDiamondIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
