import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBellCheckIcon],svg[mdi-bell-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.75 21.16l-2.75-3L16.16 17l1.59 1.59L21.34 15l1.16 1.41zM3 20v-1l2-2v-6a7 7 0 0 1 5-6.71V4a2 2 0 1 1 4 0v.29A7 7 0 0 1 19 11v1.08L18 12a6.005 6.005 0 0 0-5.66 8zm9 3a2 2 0 0 1-2-2h2.8c.24.41.53.79.85 1.13c-.36.53-.96.87-1.65.87"></svg:path>`,
})
export class MdiBellCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
