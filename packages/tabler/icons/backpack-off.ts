import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBackpackOffIcon],svg[tabler-backpack-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M10 6h3a6 6 0 0 1 6 6v3m-.129 3.872A3 3 0 0 1 16 21H8a3 3 0 0 1-3-3v-6a5.99 5.99 0 0 1 2.285-4.712M10 6V5a2 2 0 1 1 4 0v1"></svg:path><svg:path d="M9 21v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerBackpackOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
