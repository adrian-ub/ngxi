import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiHangoutsIcon],svg[mdi-hangouts-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M15 10.998l-1 2h-1.5l1-2H12v-3h3m-4 3l-1 2H8.5l1-2H8v-3h3m.5-6a8.5 8.5 0 0 0 0 17h.5v3.5c4.858-2.344 8-7.5 8-12a8.5 8.5 0 0 0-8.5-8.5z" fill="currentColor"></svg:path>`,
})
export class MdiHangoutsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
