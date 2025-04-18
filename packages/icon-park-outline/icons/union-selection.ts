import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineUnionSelectionIcon],svg[icon-park-outline-union-selection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M32 16h9a2 2 0 0 1 2 2v23a2 2 0 0 1-2 2H18a2 2 0 0 1-2-2v-9"></svg:path><svg:path d="M32 16V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v23a2 2 0 0 0 2 2h9m25-16L17 40M32 7L7 32m25-16L16 32m27-8L24 43m0-38L5 24m38 10l-9 9M14 5l-9 9"></svg:path></svg:g>`,
})
export class IconParkOutlineUnionSelectionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
