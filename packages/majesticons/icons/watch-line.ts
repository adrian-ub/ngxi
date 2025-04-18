import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsWatchLineIcon],svg[majesticons-watch-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 9v3l2 1m4-1a6 6 0 1 1-12 0a6 6 0 0 1 12 0"></svg:path><svg:path d="M15 6.5V3a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v3.5m6 11V21a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-3.5"></svg:path></svg:g>`,
})
export class MajesticonsWatchLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
