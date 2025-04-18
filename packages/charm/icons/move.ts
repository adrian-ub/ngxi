import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmMoveIcon],svg[charm-move-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m12.25 10.25l2-2.25l-2-2.25m-2-2L8 1.75l-2.25 2m-2 2L1.75 8l2 2.25m2 2l2.25 2l2.25-2M8 1.75v12M13.75 8h-12"></svg:path>`,
})
export class CharmMoveIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
