import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentNumberSymbol48FilledIcon],svg[fluent-number-symbol-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.225 5.526a1.5 1.5 0 1 0-2.95-.551L17.406 15H7.25a1.5 1.5 0 1 0 0 3h9.594l-2.24 12H5.25a1.5 1.5 0 1 0 0 3h8.794l-1.769 9.475a1.5 1.5 0 1 0 2.95.55L17.095 33h10.95l-1.77 9.475a1.5 1.5 0 1 0 2.95.55L31.095 33h9.655a1.5 1.5 0 0 0 0-3h-9.094l2.24-12h8.854a1.5 1.5 0 0 0 0-3h-8.294l1.768-9.474a1.5 1.5 0 1 0-2.948-.551L31.404 15H20.456zM28.604 30h-10.95l2.24-12h10.95z"></svg:path>`,
})
export class FluentNumberSymbol48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
