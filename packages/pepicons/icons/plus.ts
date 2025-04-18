import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPlusIcon],svg[pepicons-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M5 11a1 1 0 1 1 0-2h10a1 1 0 1 1 0 2H5Z"></svg:path><svg:path d="M9 5a1 1 0 0 1 2 0v10a1 1 0 1 1-2 0V5Z"></svg:path></svg:g>`,
})
export class PepiconsPlusIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
