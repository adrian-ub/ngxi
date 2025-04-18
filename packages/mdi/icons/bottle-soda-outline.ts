import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBottleSodaOutlineIcon],svg[mdi-bottle-soda-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.4 9.58C12.9 7.89 13 4 13 4h1V2h-4v2h1s.1 3.89-1.4 5.58A2 2 0 0 0 9 11v9a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-9a2 2 0 0 0-.6-1.42M13 20h-2v-9l.1-.09A6.3 6.3 0 0 0 12 9.5a6.3 6.3 0 0 0 .9 1.41l.1.09Z"></svg:path>`,
})
export class MdiBottleSodaOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
