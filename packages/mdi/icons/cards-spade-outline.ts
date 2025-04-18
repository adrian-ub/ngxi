import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCardsSpadeOutlineIcon],svg[mdi-cards-spade-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 17s.3 2-2 5h6c-2.3-3-2-5-2-5s1 1 3 1s4-2 4-4c0-5-5-7-8-12c-3 5-8 7-8 12c0 2 2 4 4 4s3-1 3-1m2-3h-2s-1 2-3 2c-.9 0-2-1.1-2-2c-.2-3 3.9-5.8 6-8.6c2.1 2.7 6.2 5.5 6 8.6c0 .9-1.1 2-2 2c-2 0-3-2-3-2"></svg:path>`,
})
export class MdiCardsSpadeOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
