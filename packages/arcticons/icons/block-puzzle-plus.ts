import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBlockPuzzlePlusIcon],svg[arcticons-block-puzzle-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 5.5H11.667v12.333H24zm12.333 0H24v12.333h12.333zM24 17.833H11.667v12.334H24zm0 12.334H11.667V42.5H24z"></svg:path>`,
})
export class ArcticonsBlockPuzzlePlusIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
