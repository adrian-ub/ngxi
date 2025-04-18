import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSyncAlt2Icon],svg[arcticons-sync-alt-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m41.822 22.466l-12.9-16.599a.95.95 0 0 0-1.502 0L13.327 24H6.93a.95.95 0 0 0-.75 1.534l12.9 16.599a.95.95 0 0 0 1.501 0L34.673 24h6.398a.95.95 0 0 0 .75-1.534"></svg:path>`,
})
export class ArcticonsSyncAlt2Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
