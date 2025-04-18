import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkLeafIcon],svg[icon-park-leaf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M37 24C37 38.0938 24 44 24 44C24 44 11 39.375 11 24C11 8.625 24 4 24 4C24 4 37 9.90625 37 24Z"></svg:path><svg:path d="M24 36L29 31"></svg:path><svg:path d="M24 29L19 24"></svg:path><svg:path d="M24 23L29 18"></svg:path><svg:path d="M24 44V14"></svg:path></svg:g>`,
})
export class IconParkLeafIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
