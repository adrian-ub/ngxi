import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsWatchIcon],svg[majesticons-watch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-rule="evenodd" d="M5 12a7 7 0 1 1 14 0a7 7 0 0 1-14 0m8-3a1 1 0 1 0-2 0v3a1 1 0 0 0 .553.894l2 1a1 1 0 1 0 .894-1.788L13 11.382z" clip-rule="evenodd"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 6.5V3a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v3.5m6 11V21a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-3.5"></svg:path></svg:g>`,
})
export class MajesticonsWatchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
