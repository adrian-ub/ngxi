import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiMonitorArrowDownVariantIcon],svg[mdi-monitor-arrow-down-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17 14l5-5l-1.4-1.4l-2.6 2.6V3h-2v7.2l-2.6-2.6L12 9zm6 0v2c0 1.1-.9 2-2 2h-7v2h2v2H8v-2h2v-2H3c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h9v2H3v12h18v-2z"></svg:path>`,
})
export class MdiMonitorArrowDownVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
