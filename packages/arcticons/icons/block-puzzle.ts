import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBlockPuzzleIcon],svg[arcticons-block-puzzle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.167 5.5H17.833v12.333h12.334zm12.333 0H30.167v12.333H42.5zm-24.667 0H5.5v12.333h12.333zm12.334 12.333H17.833v12.334h12.334zm0 12.334H17.833V42.5h12.334z"></svg:path>`,
})
export class ArcticonsBlockPuzzleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
