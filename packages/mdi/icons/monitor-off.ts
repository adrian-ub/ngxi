import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiMonitorOffIcon],svg[mdi-monitor-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 18v2h2v2H8v-2h2v-2H3a2 2 0 0 1-2-2V4L0 3l1.41-1.42l20.75 20.76l-1.41 1.41L15 18zM3 16h10L3 6zM21 2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-.34l-2-2H21V4H6.66l-2-2z"></svg:path>`,
})
export class MdiMonitorOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
