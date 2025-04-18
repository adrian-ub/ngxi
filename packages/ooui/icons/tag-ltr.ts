import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiTagLtrIcon],svg[ooui-tag-ltr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 1.28A1 1 0 0 0 8.35 1H2a1 1 0 0 0-1 1v6.35a1 1 0 0 0 .28.65L11 18.72a1 1 0 0 0 1.37 0l6.38-6.38a1 1 0 0 0-.03-1.34zM5 7a2 2 0 1 1 2-2a2 2 0 0 1-2 2"></svg:path>`,
})
export class OouiTagLtrIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
