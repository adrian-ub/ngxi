import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPintGlassIcon],svg[ph-pint-glass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M206 26.69a8 8 0 0 0-6-2.69H56a8 8 0 0 0-7.94 9l23.15 193a16 16 0 0 0 15.89 14h81.8a16 16 0 0 0 15.89-14.09L207.94 33a8 8 0 0 0-1.94-6.31M191 40l-2.9 24H67.9L65 40Zm-22.1 184H87.1L69.82 80h116.36Z"></svg:path>`,
})
export class PhPintGlassIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
