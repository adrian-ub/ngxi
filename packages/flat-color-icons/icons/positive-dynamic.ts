import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsPositiveDynamicIcon],svg[flat-color-icons-positive-dynamic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#00BCD4" d="M19 22h10v20H19zM32 8h10v34H32zM6 30h10v12H6z"></svg:path><svg:g fill="#3F51B5"><svg:path d="m11 8l10 10V8z"></svg:path><svg:path d="m9.394 22.437l-2.828-2.828l9.969-9.969l2.828 2.828z"></svg:path></svg:g>`,
})
export class FlatColorIconsPositiveDynamicIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
