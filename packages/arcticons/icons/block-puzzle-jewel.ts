import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBlockPuzzleJewelIcon],svg[arcticons-block-puzzle-jewel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 5.5h12.333v12.333H24zm-12.333 0H24v12.333H11.667zM24 17.833h12.333v12.334H24zm0 12.334h12.333V42.5H24z"></svg:path>`,
})
export class ArcticonsBlockPuzzleJewelIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
