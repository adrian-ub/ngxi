import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerEditOffIcon],svg[tabler-edit-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M7 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-1"></svg:path><svg:path d="M10.507 10.498L9 12v3h3l1.493-1.498m2-2.01l4.89-4.907a2.1 2.1 0 0 0-2.97-2.97L12.5 8.511M16 5l3 3M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerEditOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
