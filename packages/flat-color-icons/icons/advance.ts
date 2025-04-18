import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsAdvanceIcon],svg[flat-color-icons-advance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#1565C0"><svg:path d="M46.1 24L33 35V13zM10 20h4v8h-4zm-6 0h4v8H4zm12 0h4v8h-4z"></svg:path><svg:path d="M22 20h14v8H22z"></svg:path></svg:g>`,
})
export class FlatColorIconsAdvanceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
