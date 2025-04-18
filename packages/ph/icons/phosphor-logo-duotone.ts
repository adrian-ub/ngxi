import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPhosphorLogoDuotoneIcon],svg[ph-phosphor-logo-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 104a64 64 0 0 1-64 64h-8V40h8a64 64 0 0 1 64 64M72 168h72L72 40Z" opacity=".2"></svg:path><svg:path d="M152 32H72a8 8 0 0 0-8 8v128a80.09 80.09 0 0 0 80 80a8 8 0 0 0 8-8v-64a72 72 0 0 0 0-144M80 70.54L130.32 160H80Zm56 161A64.14 64.14 0 0 1 80.51 176H136Zm0-94L85.68 48H136ZM152 160V48a56 56 0 0 1 0 112"></svg:path></svg:g>`,
})
export class PhPhosphorLogoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
