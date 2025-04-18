import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBmwIcon],svg[arcticons-bmw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="24" r="12.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 11.5v25M11.5 24h25m-15-14.403V4.659l2.5 5l2.5-5v5m13.071 2.628l-4.419 2.651l2.651-4.419l-4.419 2.652l2.651-4.42m-23.938 3.164c.486-.486 1.282-.486 1.768 0s.486 1.281 0 1.767l-1.459 1.459l-3.535-3.536l1.458-1.458c.486-.486 1.282-.486 1.768 0s.486 1.282 0 1.768m0 0l-1.458 1.458"></svg:path>`,
})
export class ArcticonsBmwIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
