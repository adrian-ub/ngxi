import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCoffinIcon],svg[tabler-coffin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M7 3L5 9l2 12h6l2-12l-2-6zm3 4v5M8 9h4"></svg:path><svg:path d="M13 21h4l2-12l-2-6h-4"></svg:path></svg:g>`,
})
export class TablerCoffinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
