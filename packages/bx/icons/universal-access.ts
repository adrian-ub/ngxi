import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxUniversalAccessIcon],svg[bx-universal-access-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="7.5" r="1.5" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 18a8 8 0 1 1 8-8a8 8 0 0 1-8 8"></svg:path><svg:path fill="currentColor" d="M16.5 10.5L16 9l-3 1h-2L8 9l-.5 1.5l3 1V13L9 17.25l1.5.75l1.25-3.5h.5L13.5 18l1.5-.75L13.5 13v-1.5z"></svg:path>`,
})
export class BxUniversalAccessIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
