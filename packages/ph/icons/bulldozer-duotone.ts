import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phBulldozerDuotoneIcon],svg[ph-bulldozer-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M192 176a32 32 0 0 1-32 32H40a32 32 0 0 1-32-32a32 32 0 0 1 32-32h120a32 32 0 0 1 32 32" opacity=".2"></svg:path><svg:path d="M248 200h-8a8 8 0 0 1-8-8v-32a8 8 0 0 1 8-8h8a8 8 0 0 0 0-16h-8a24 24 0 0 0-24 24v8h-16.8a40.09 40.09 0 0 0-33.71-31.61l-36.05-86.54A16 16 0 0 0 114.67 40H24A16 16 0 0 0 8 56v96a40 40 0 0 0 32 64h120a40.07 40.07 0 0 0 39.2-32H216v8a24 24 0 0 0 24 24h8a8 8 0 0 0 0-16m-100-64H64V56h50.67ZM48 56v80h-8a39.7 39.7 0 0 0-16 3.35V56Zm112 144H40a24 24 0 0 1 0-48h120a24 24 0 0 1 0 48m8-24a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h120a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhBulldozerDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
