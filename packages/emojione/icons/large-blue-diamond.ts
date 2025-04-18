import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneLargeBlueDiamondIcon],svg[emojione-large-blue-diamond-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#0071b8" d="M2.018 32L32 2.019l29.981 29.98L32 61.982z"></svg:path>`,
})
export class EmojioneLargeBlueDiamondIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
