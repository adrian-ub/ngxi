import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiStrikethroughYIcon],svg[ooui-strikethrough-y-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.3 8h2.3l-4-6H3.3zm3.1 0h2.3l4-6h-2.3zM1 10v2h8v6h2v-6h8v-2z"></svg:path>`,
})
export class OouiStrikethroughYIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
