import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerEditCircleOffIcon],svg[tabler-edit-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M10.507 10.498L9 12v3h3l1.493-1.498m2-2.01l4.89-4.907a2.1 2.1 0 0 0-2.97-2.97L12.5 8.511M16 5l3 3"></svg:path><svg:path d="M7.476 7.471A7 7 0 0 0 10 21a7 7 0 0 0 6.53-4.474M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerEditCircleOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
