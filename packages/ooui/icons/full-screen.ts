import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiFullScreenIcon],svg[ooui-full-screen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 1v6h2V3h4V1zm2 12H1v6h6v-2H3zm14 4h-4v2h6v-6h-2zm0-16h-4v2h4v4h2V1z"></svg:path>`,
})
export class OouiFullScreenIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
