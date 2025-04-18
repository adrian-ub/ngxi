import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiRefreshSyncIcon],svg[zmdi-refresh-sync-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M171 69q70 0 120 50t50 121q0 49-26 91l-31-31q15-28 15-60q0-53-37.5-90.5T171 112v64L85 91l86-86zm0 299v-64l85 85l-85 86v-64q-71 0-121-50T0 240q0-49 26-91l32 31q-15 28-15 60q0 53 37.5 90.5T171 368"></svg:path>`,
})
export class ZmdiRefreshSyncIcon {
  readonly viewBox = input("0 0 344 480")
  readonly width = input("0.72em")
  readonly height = input("1em")
}
