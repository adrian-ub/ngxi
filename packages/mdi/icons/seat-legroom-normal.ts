import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSeatLegroomNormalIcon],svg[mdi-seat-legroom-normal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 12V3H3v9a5 5 0 0 0 5 5h6v-2H8a3 3 0 0 1-3-3m15.5 6H19v-7a2 2 0 0 0-2-2h-5V3H6v8a3 3 0 0 0 3 3h7v7h4.5a1.5 1.5 0 0 0 1.5-1.5a1.5 1.5 0 0 0-1.5-1.5"></svg:path>`,
})
export class MdiSeatLegroomNormalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
