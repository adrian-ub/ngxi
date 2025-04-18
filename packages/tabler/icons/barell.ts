import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBarellIcon],svg[tabler-barell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M6.222 4h11.556C19.259 6.37 20 9.037 20 12s-.74 5.63-2.222 8H6.222C4.741 17.63 4 14.963 4 12s.74-5.63 2.222-8z"></svg:path><svg:path d="M15 4c.667 2.667 1 5.333 1 8s-.333 5.333-1 8M9 4c-.667 2.667-1 5.333-1 8s.333 5.333 1 8m-4.5-4h15m0-8h-15"></svg:path></svg:g>`,
})
export class TablerBarellIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
