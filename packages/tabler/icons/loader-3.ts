import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerLoader3Icon],svg[tabler-loader-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 12a9 9 0 0 0 9 9a9 9 0 0 0 9-9a9 9 0 0 0-9-9"></svg:path><svg:path d="M17 12a5 5 0 1 0-5 5"></svg:path></svg:g>`,
})
export class TablerLoader3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
