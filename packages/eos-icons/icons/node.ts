import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsNodeIcon],svg[eos-icons-node-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="3" r="1" fill="currentColor"></svg:circle><svg:circle cx="20" cy="8" r="1" fill="currentColor"></svg:circle><svg:circle cx="20" cy="16" r="1" fill="currentColor"></svg:circle><svg:circle cx="4" cy="8" r="1" fill="currentColor"></svg:circle><svg:circle cx="4" cy="16" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M20 14v-4a1.992 1.992 0 0 1-1.481-3.333l-4.783-2.69a1.983 1.983 0 0 1-3.472 0l-4.783 2.69A1.992 1.992 0 0 1 4 10v4a1.992 1.992 0 0 1 1.481 3.333l4.783 2.69a2 2 0 0 1 1.236-.952v-5.142a2 2 0 1 1 1 0v5.142a2 2 0 0 1 1.236.953l4.783-2.69A1.992 1.992 0 0 1 20 14"></svg:path><svg:circle cx="12" cy="21" r="1" fill="currentColor"></svg:circle><svg:circle cx="12" cy="12" r="1" fill="currentColor"></svg:circle>`,
})
export class EosIconsNodeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
