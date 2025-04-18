import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerHomeDownIcon],svg[tabler-home-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M19 12h2l-9-9l-9 9h2v7a2 2 0 0 0 2 2h5.5"></svg:path><svg:path d="M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m4 1v6m3-3l-3 3l-3-3"></svg:path></svg:g>`,
})
export class TablerHomeDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
