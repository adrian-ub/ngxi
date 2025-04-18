import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerHomeEditIcon],svg[tabler-home-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M9 21v-6a2 2 0 0 1 2-2h2c.645 0 1.218.305 1.584.78"></svg:path><svg:path d="m20 11l-8-8l-9 9h2v7a2 2 0 0 0 2 2h4m7.42-5.39a2.1 2.1 0 0 1 2.97 2.97L18 22h-3v-3z"></svg:path></svg:g>`,
})
export class TablerHomeEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
