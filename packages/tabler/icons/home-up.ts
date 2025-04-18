import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerHomeUpIcon],svg[tabler-home-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M9 21v-6a2 2 0 0 1 2-2h2c.641 0 1.212.302 1.578.771"></svg:path><svg:path d="M20.136 11.136L12 3l-9 9h2v7a2 2 0 0 0 2 2h6.344M19 22v-6m3 3l-3-3l-3 3"></svg:path></svg:g>`,
})
export class TablerHomeUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
