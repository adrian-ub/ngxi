import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPlusIcon],svg[pepicons-pencil-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M5 10.5a.5.5 0 0 1 0-1h10a.5.5 0 0 1 0 1z"></svg:path><svg:path d="M9.5 5a.5.5 0 0 1 1 0v10a.5.5 0 0 1-1 0z"></svg:path></svg:g>`,
})
export class PepiconsPencilPlusIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
