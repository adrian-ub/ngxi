import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCpu32BitIcon],svg[mdi-cpu-32-bit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 3v2H7a2 2 0 0 0-2 2v2H3v2h2v2H3v2h2v2a2 2 0 0 0 2 2h2v2h2v-2h2v2h2v-2h2a2 2 0 0 0 2-2v-2h2v-2h-2v-2h2V9h-2V7a2 2 0 0 0-2-2h-2V3h-2v2h-2V3M7 9h3.5a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H7v-1.5h3v-.75H8.5v-1.5H10v-.75H7M12.5 9H16a1 1 0 0 1 1 1v1.75a1 1 0 0 1-1 1h-2v.75h3V15h-4.5v-2.75a1 1 0 0 1 1-1h2v-.75h-3"></svg:path>`,
})
export class MdiCpu32BitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
