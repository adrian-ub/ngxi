import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerView360Icon],svg[tabler-view-360-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0"></svg:path><svg:path d="M8 12a4 9 0 1 0 8 0a4 9 0 1 0-8 0"></svg:path><svg:path d="M3 12c0 2.21 4.03 4 9 4s9-1.79 9-4s-4.03-4-9-4s-9 1.79-9 4"></svg:path></svg:g>`,
})
export class TablerView360Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
