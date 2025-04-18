import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBroadcastOffIcon],svg[tabler-broadcast-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M18.364 19.364A9 9 0 0 0 8.643 4.647M6.155 6.156a9 9 0 0 0-.519 13.208"></svg:path><svg:path d="M15.536 16.536A5 5 0 0 0 12 8M9 9a5 5 0 0 0-.535 7.536M12 12a1 1 0 1 0 1 1M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerBroadcastOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
