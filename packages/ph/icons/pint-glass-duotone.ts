import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPintGlassDuotoneIcon],svg[ph-pint-glass-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m195.2 72l-18.35 153a8 8 0 0 1-7.95 7H87.1a8 8 0 0 1-7.95-7L60.8 72Z" opacity=".2"></svg:path><svg:path d="M206 26.69a8 8 0 0 0-6-2.69H56a8 8 0 0 0-7.94 9l23.15 193a16 16 0 0 0 15.89 14h81.8a16 16 0 0 0 15.89-14.09L207.94 33a8 8 0 0 0-1.94-6.31M191 40l-2.9 24H67.9L65 40Zm-22.1 184H87.1L69.82 80h116.36Z"></svg:path></svg:g>`,
})
export class PhPintGlassDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
