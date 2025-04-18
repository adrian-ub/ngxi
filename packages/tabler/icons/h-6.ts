import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerH6Icon],svg[tabler-h-6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M19 14a2 2 0 1 0 0 4a2 2 0 0 0 0-4"></svg:path><svg:path d="M21 12a2 2 0 1 0-4 0v4M4 6v12m8-12v12m-1 0h2M3 18h2m-1-6h8M3 6h2m6 0h2"></svg:path></svg:g>`,
})
export class TablerH6Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
