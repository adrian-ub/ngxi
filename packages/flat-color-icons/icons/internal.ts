import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsInternalIcon],svg[flat-color-icons-internal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="30" r="15" fill="#B3E5FC"></svg:circle><svg:g fill="#1565C0"><svg:path d="M24 38.7L15 28h18z"></svg:path><svg:path d="M21 5h6v26h-6z"></svg:path></svg:g>`,
})
export class FlatColorIconsInternalIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
