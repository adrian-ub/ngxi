import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiLiteralLtrIcon],svg[ooui-literal-ltr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3H5V1h1c.768 0 1.47.289 2 .764A3 3 0 0 1 10 1h1v2h-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h1v2h-1c-.768 0-1.47-.289-2-.764A3 3 0 0 1 6 19H5v-2h1a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1m6 12h6a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-6v2h6v6h-6zm-8-2v2H2a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2v2H2v6z"></svg:path>`,
})
export class OouiLiteralLtrIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
