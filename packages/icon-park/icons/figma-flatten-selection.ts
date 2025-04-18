import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkFigmaFlattenSelectionIcon],svg[icon-park-figma-flatten-selection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M32 18L24 26L16 18"></svg:path><svg:path d="M36 42H12"></svg:path><svg:path d="M42 34H6"></svg:path><svg:path d="M24 6V26"></svg:path></svg:g>`,
})
export class IconParkFigmaFlattenSelectionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
