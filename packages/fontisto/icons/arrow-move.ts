import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoArrowMoveIcon],svg[fontisto-arrow-move-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.566 4.541L12.025 0L7.484 4.541zM7.484 19.459L12.025 24l4.539-4.541z"></svg:path><svg:path fill="currentColor" d="M13.194 4.49v14.969h-2.218V4.49zM4.541 7.485L0 12.026l4.541 4.541zm14.918 9.081L24 12.025l-4.541-4.541z"></svg:path><svg:path fill="currentColor" d="M4.49 10.856h14.969v2.218H4.49z"></svg:path>`,
})
export class FontistoArrowMoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
