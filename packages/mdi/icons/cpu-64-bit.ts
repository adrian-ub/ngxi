import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCpu64BitIcon],svg[mdi-cpu-64-bit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 3v2H7a2 2 0 0 0-2 2v2H3v2h2v2H3v2h2v2a2 2 0 0 0 2 2h2v2h2v-2h2v2h2v-2h2a2 2 0 0 0 2-2v-2h2v-2h-2v-2h2V9h-2V7a2 2 0 0 0-2-2h-2V3h-2v2h-2V3M8 9h3.5v1.5h-3v.75h2a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1m4.5 0H14v2h1.5V9H17v6h-1.5v-2.5h-3m-4 .25v.75H10v-.75"></svg:path>`,
})
export class MdiCpu64BitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
