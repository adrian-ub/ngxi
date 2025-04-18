import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerHomeCancelIcon],svg[tabler-home-cancel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M16 19a3 3 0 1 0 6 0a3 3 0 1 0-6 0m1 2l4-4m-2-5h2l-9-9l-9 9h2v7a2 2 0 0 0 2 2h5.5"></svg:path><svg:path d="M9 21v-6a2 2 0 0 1 2-2h2c.58 0 1.103.247 1.468.642"></svg:path></svg:g>`,
})
export class TablerHomeCancelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
