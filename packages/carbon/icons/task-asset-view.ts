import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonTaskAssetViewIcon],svg[carbon-task-asset-view-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.5 26a3.5 3.5 0 1 1 3.5-3.5a3.504 3.504 0 0 1-3.5 3.5m0-5a1.5 1.5 0 1 0 1.5 1.5a1.5 1.5 0 0 0-1.5-1.5"></svg:path><svg:path fill="currentColor" d="M22.5 31a8.5 8.5 0 1 1 8.5-8.5a8.51 8.51 0 0 1-8.5 8.5m0-15a6.5 6.5 0 1 0 6.5 6.5a6.507 6.507 0 0 0-6.5-6.5"></svg:path><svg:path fill="currentColor" d="M25 5h-3V4a2.006 2.006 0 0 0-2-2h-8a2.006 2.006 0 0 0-2 2v1H7a2.006 2.006 0 0 0-2 2v21a2.006 2.006 0 0 0 2 2h5v-2H7V7h3v3h12V7h3v5h2V7a2.006 2.006 0 0 0-2-2m-5 3h-8V4h8Z"></svg:path>`,
})
export class CarbonTaskAssetViewIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
