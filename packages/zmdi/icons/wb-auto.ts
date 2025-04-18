import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiWbAutoIcon],svg[zmdi-wb-auto-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m146 206l25-78l24 78zM469 85h39l-44 192h-37l-32-130l-32 130h-38l-2-9q-21 43-62 69t-90 26q-71 0-121-50T0 192T50 71t121-50q81 0 133 64h16l26 135l32-135h34l32 135zM220 277h40L192 85h-43L81 277h41l15-42h68z"></svg:path>`,
})
export class ZmdiWbAutoIcon {
  readonly viewBox = input("0 0 512 384")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
