import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneDiamondSuitIcon],svg[emojione-diamond-suit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ff5a79" d="M2.018 32L32 2.02L61.98 32L32 61.981z"></svg:path>`,
})
export class EmojioneDiamondSuitIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
