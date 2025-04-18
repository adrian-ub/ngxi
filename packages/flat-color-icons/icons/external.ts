import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsExternalIcon],svg[flat-color-icons-external-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="31" r="14" fill="#B2DFDB"></svg:circle><svg:g fill="#009688"><svg:path d="M24 3.3L33 14H15z"></svg:path><svg:path d="M21 11h6v23h-6z"></svg:path></svg:g>`,
})
export class FlatColorIconsExternalIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
