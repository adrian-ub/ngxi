import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenClipboardListStroke16Icon],svg[garden-clipboard-list-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 2.5H2a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5h-2.5m-7 8h2v2h-2zm0-4h2v2h-2zm4.5 1h3m-3 4h3m-7.464-7c-.3-2.08 1.332-4 3.45-4s3.749 1.92 3.449 4h-6.9z"></svg:path>`,
})
export class GardenClipboardListStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
