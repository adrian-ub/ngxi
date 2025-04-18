import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiMonitorShimmerIcon],svg[mdi-monitor-shimmer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 16H3V4h18m0-2H3c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h7v2H8v2h8v-2h-2v-2h7c1.11 0 2-.89 2-2V4a2 2 0 0 0-2-2m-6 3.5l-.62 1.37L13 7.5l1.38.63L15 9.5l.63-1.37L17 7.5l-1.37-.63zm-4.5 2L9.41 9.91L7 11l2.41 1.09l1.09 2.41l1.1-2.41L14 11l-2.4-1.09z"></svg:path>`,
})
export class MdiMonitorShimmerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
