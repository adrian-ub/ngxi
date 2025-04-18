import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerPlayFootballIcon],svg[tabler-play-football-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M11 4a1 1 0 1 0 2 0a1 1 0 0 0-2 0M3 17l5 1l.75-1.5M14 21v-4l-4-3l1-6"></svg:path><svg:path d="M6 12V9l5-1l3 3l3 1"></svg:path><svg:path fill="currentColor" d="M19.5 20a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1"></svg:path></svg:g>`,
})
export class TablerPlayFootballIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
