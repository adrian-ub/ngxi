import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxCubeAltIcon],svg[bx-cube-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.895 3.553A1 1 0 0 0 17 3H7c-.379 0-.725.214-.895.553l-4 8a1 1 0 0 0 0 .895l4 8c.17.338.516.552.895.552h10c.379 0 .725-.214.895-.553l4-8a1 1 0 0 0 0-.895zM19.382 11h-7.764l-3-6h7.764zM4.118 12L7 6.236L9.882 12L7 17.764zm12.264 7H8.618l3-6h7.764z"></svg:path>`,
})
export class BxCubeAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
