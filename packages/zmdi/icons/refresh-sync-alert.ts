import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiRefreshSyncAlertIcon],svg[zmdi-refresh-sync-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 192q0-59 36-105t92-60v44q-38 14-61.5 47T43 192q0 53 37 90l48-47v128H0l50-51Q0 262 0 192m171 107v-43h42v43zM384 21l-50 51q50 50 50 120q0 59-36 105t-92 60v-44q38-14 61.5-47t23.5-74q0-53-37-90l-48 47V21zM171 213V85h42v128z"></svg:path>`,
})
export class ZmdiRefreshSyncAlertIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}
