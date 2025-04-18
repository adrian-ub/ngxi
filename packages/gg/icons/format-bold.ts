import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggFormatBoldIcon],svg[gg-format-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11 4.504H7v14.992h6a4 4 0 0 0 .604-7.955A4 4 0 0 0 11 4.505Zm-2 2h2a2 2 0 1 1 0 4H9zm0 10.991v-4h4a2 2 0 1 1 0 4z" clip-rule="evenodd"></svg:path>`,
})
export class GgFormatBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
