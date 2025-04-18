import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerGlassIcon],svg[tabler-glass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M8 21h8m-4-5v5m5-16l1 6c0 3.012-2.686 5-6 5s-6-1.988-6-5l1-6"></svg:path><svg:path d="M7 5a5 2 0 1 0 10 0A5 2 0 1 0 7 5"></svg:path></svg:g>`,
})
export class TablerGlassIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
