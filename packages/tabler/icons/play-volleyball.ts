import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerPlayVolleyballIcon],svg[tabler-play-volleyball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M13 4a1 1 0 1 0 2 0a1 1 0 0 0-2 0"></svg:path><svg:path fill="currentColor" d="M20.5 10a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1"></svg:path><svg:path d="m2 16l5 1l.5-2.5m4 6.5l2.5-5.5L8.5 12L12 8l3 4l4 2"></svg:path></svg:g>`,
})
export class TablerPlayVolleyballIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
