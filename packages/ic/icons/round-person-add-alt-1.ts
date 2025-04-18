import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundPersonAddAlt1Icon],svg[ic-round-person-add-alt-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="9" cy="8" r="4" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M9 14c-2.67 0-8 1.34-8 4v1c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-1c0-2.66-5.33-4-8-4m11-4V7h-2v3h-3v2h3v3h2v-3h3v-2z"></svg:path>`,
})
export class IcRoundPersonAddAlt1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
