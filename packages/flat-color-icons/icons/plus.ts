import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsPlusIcon],svg[flat-color-icons-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21" fill="#4CAF50"></svg:circle><svg:g fill="#fff"><svg:path d="M21 14h6v20h-6z"></svg:path><svg:path d="M14 21h20v6H14z"></svg:path></svg:g>`,
})
export class FlatColorIconsPlusIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
