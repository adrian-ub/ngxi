import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceArrowsSynchronizeArrowsLoadingLoadSyncSynchronizeArrowReloadIcon],svg[streamline-interface-arrows-synchronize-arrows-loading-load-sync-synchronize-arrow-reload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m11 9l2-.5l.5 2"></svg:path><svg:path d="M13 8.5A6.76 6.76 0 0 1 7 13h0a6 6 0 0 1-5.64-3.95M3 5l-2 .5l-.5-2"></svg:path><svg:path d="M1 5.5C1.84 3.2 4.42 1 7 1h0a6 6 0 0 1 5.64 4"></svg:path></svg:g>`,
})
export class StreamlineInterfaceArrowsSynchronizeArrowsLoadingLoadSyncSynchronizeArrowReloadIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
