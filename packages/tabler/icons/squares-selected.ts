import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerSquaresSelectedIcon],svg[tabler-squares-selected-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M8 10a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2zm0 4.5l6.492-6.492M13.496 20L20 13.496zm-4.91-.586L19.413 8.587"></svg:path><svg:path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"></svg:path></svg:g>`,
})
export class TablerSquaresSelectedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
