import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerSpherePlusIcon],svg[tabler-sphere-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 12c0 1.657 4.03 3 9 3c1.116 0 2.185-.068 3.172-.192m5.724-2.35A1.1 1.1 0 0 0 21 12"></svg:path><svg:path d="M20.984 12.546a9 9 0 1 0-8.442 8.438M16 19h6m-3-3v6"></svg:path></svg:g>`,
})
export class TablerSpherePlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
