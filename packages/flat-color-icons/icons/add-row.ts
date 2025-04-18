import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsAddRowIcon],svg[flat-color-icons-add-row-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#90CAF9" d="M43 30V18c0-2.2-1.8-4-4-4H9c-2.2 0-4 1.8-4 4v12c0 2.2 1.8 4 4 4h30c2.2 0 4-1.8 4-4M9 18h30v12H9z"></svg:path><svg:circle cx="38" cy="38" r="10" fill="#43A047"></svg:circle><svg:g fill="#fff"><svg:path d="M32 36h12v4H32z"></svg:path><svg:path d="M36 32h4v12h-4z"></svg:path></svg:g>`,
})
export class FlatColorIconsAddRowIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
