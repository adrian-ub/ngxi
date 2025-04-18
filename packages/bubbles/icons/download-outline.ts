import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesDownloadOutlineIcon],svg[bubbles-download-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12.001 3.75v12m-4.5-4.5l4.5 4.5l4.5-4.5m6.75 4.5v1.5a3 3 0 0 1-3 3h-16.5a3 3 0 0 1-3-3v-1.5"></svg:path>`,
})
export class BubblesDownloadOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
