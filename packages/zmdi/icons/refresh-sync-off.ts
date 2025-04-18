import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiRefreshSyncOffIcon],svg[zmdi-refresh-sync-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M152 71q-5 2-16 8l-31-32q22-14 47-20zM0 51l27-27l335 336l-27 27l-50-50q-22 14-48 20v-44q7-3 17-8L81 133q-14 28-14 59q0 53 38 90l47-47v128H24l51-51q-51-50-51-120q0-49 26-90zm366-30l-51 51q51 50 51 120q0 49-26 90l-32-31q15-28 15-59q0-53-38-90l-47 47V21z"></svg:path>`,
})
export class ZmdiRefreshSyncOffIcon {
  readonly viewBox = input("0 0 368 392")
  readonly width = input("0.94em")
  readonly height = input("1em")
}
