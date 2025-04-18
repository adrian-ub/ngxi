import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerWorldPlusIcon],svg[tabler-world-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M20.985 12.518a9 9 0 1 0-8.45 8.466M3.6 9h16.8M3.6 15H15"></svg:path><svg:path d="M11.5 3a17 17 0 0 0 0 18m1-18a17 17 0 0 1 2.283 12.157M16 19h6m-3-3v6"></svg:path></svg:g>`,
})
export class TablerWorldPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
