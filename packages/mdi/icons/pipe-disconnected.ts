import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPipeDisconnectedIcon],svg[mdi-pipe-disconnected-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 9v2H8V9h2V8H4v2H2V2h2v2h8a2 2 0 0 1 2 2v3zm-6 6v3a2 2 0 0 0 2 2h8v2h2v-8h-2v2h-6v-1h2v-2H8v2z"></svg:path>`,
})
export class MdiPipeDisconnectedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
