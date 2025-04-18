import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBxsInvaderIcon],svg[bx-bxs-invader-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M6 3h2v2H6z" fill="currentColor"></svg:path><svg:path d="M8 19h3v2H8z" fill="currentColor"></svg:path><svg:path d="M16 3h2v2h-2z" fill="currentColor"></svg:path><svg:path d="M13 19h3v2h-3z" fill="currentColor"></svg:path><svg:path d="M20 11V9h-2V7h-2V5h-2v2h-4V5H8v2H6v2H4v2H2v8h2v-4h2v4h2v-3h8v3h2v-4h2v4h2v-8zm-10 1H8V9h2zm6 0h-2V9h2z" fill="currentColor"></svg:path>`,
})
export class BxBxsInvaderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
