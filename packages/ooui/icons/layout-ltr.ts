import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiLayoutLtrIcon],svg[ooui-layout-ltr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 12V1H1v18h18v-7z"></svg:path><svg:path fill="currentColor" d="M11 1v8h8V1zm6 6h-4V3h4z"></svg:path>`,
})
export class OouiLayoutLtrIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
