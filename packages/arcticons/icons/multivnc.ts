import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMultivncIcon],svg[arcticons-multivnc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.08 7.6H35v13.7H13ZM4.53 32.8h7.28v7.6H4.5Zm10.47 0h7.29v7.6h-7.35Zm10.68 0H33v7.6h-7.35Zm10.53 0h7.29v7.6h-7.31ZM23.93 21.31V27h15.91v5.77M29.31 27v5.8M23.93 27H8.16v5.7M18.59 27v5.8"></svg:path>`,
})
export class ArcticonsMultivncIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
