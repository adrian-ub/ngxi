import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiTwelveThirtyIcon],svg[openmoji-twelve-thirty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:circle cx="35.958" cy="35.99" r="23"></svg:circle><svg:path d="M36 36.062v17m.004-17.059v-11"></svg:path></svg:g><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:circle cx="35.958" cy="35.99" r="23"></svg:circle><svg:path d="M36 36.062v17m.033-17.246l2.847-10.625"></svg:path></svg:g>`,
})
export class OpenmojiTwelveThirtyIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
