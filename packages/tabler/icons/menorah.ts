import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMenorahIcon],svg[tabler-menorah-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 4v16M8 4v2a4 4 0 1 0 8 0V4"></svg:path><svg:path d="M4 4v2a8 8 0 1 0 16 0V4M10 20h4"></svg:path></svg:g>`,
})
export class TablerMenorahIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
