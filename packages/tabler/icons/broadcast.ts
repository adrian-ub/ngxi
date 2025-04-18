import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBroadcastIcon],svg[tabler-broadcast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M18.364 19.364a9 9 0 1 0-12.728 0"></svg:path><svg:path d="M15.536 16.536a5 5 0 1 0-7.072 0"></svg:path><svg:path d="M11 13a1 1 0 1 0 2 0a1 1 0 1 0-2 0"></svg:path></svg:g>`,
})
export class TablerBroadcastIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
