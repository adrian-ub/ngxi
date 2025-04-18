import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiTextStyleIcon],svg[ooui-text-style-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 17h16v2H2zm9.34-15h3.31l2 14h-3.19l-.29-2.88H8L6.43 16H3.37zm-2 8.71h3.55l-.61-5.51z"></svg:path>`,
})
export class OouiTextStyleIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
