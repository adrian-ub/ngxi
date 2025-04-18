import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerVectorOffIcon],svg[tabler-vector-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.68 6.733A1 1 0 0 1 6 7H4a1 1 0 0 1-1-1V4a1 1 0 0 1 .293-.708M17 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zm3.72 16.693A1 1 0 0 1 20 21h-2a1 1 0 0 1-1-1v-2c0-.282.116-.536.304-.718M3 18a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zM5 7v10M19 7v8M9 5h8M7 19h10M3 3l18 18"></svg:path>`,
})
export class TablerVectorOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
