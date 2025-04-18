import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiMonitorShareIcon],svg[mdi-monitor-share-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 4v12c0 1.11-.89 2-2 2h-6v-2h6V4H3v12h6v2H3a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2h18a2 2 0 0 1 2 2m-10 9h3l-4-4l-4 4h3v7H8v2h8v-2h-3z"></svg:path>`,
})
export class MdiMonitorShareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
