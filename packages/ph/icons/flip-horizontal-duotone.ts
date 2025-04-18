import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phFlipHorizontalDuotoneIcon],svg[ph-flip-horizontal-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M112 40v160a8 8 0 0 1-8 8H40a8 8 0 0 1-7.37-11.12l64-160C100 28.86 112 31.29 112 40" opacity=".2"></svg:path><svg:path d="M107.18 24.33a15.86 15.86 0 0 0-17.92 9.45l-.06.14l-64 159.93A16 16 0 0 0 40 216h64a16 16 0 0 0 16-16V40a15.85 15.85 0 0 0-12.82-15.67M104 200H40l.06-.15L104 40Zm126.77-6.15l-64-159.93l-.06-.14A16 16 0 0 0 136 40v160a16 16 0 0 0 16 16h64a16 16 0 0 0 14.78-22.15ZM152 200V40l63.93 159.84l.06.15Z"></svg:path></svg:g>`,
})
export class PhFlipHorizontalDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
