import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiClubSuitIcon],svg[openmoji-club-suit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" d="m33.289 36.974l-3.462-6.746s5.326 4.083 12.782 0c0 0-1.775 6.124-1.51 6.923s-7.81-.177-7.81-.177"></svg:path><svg:circle cx="19" cy="36.7" r="11.5" fill="#3f3f3f"></svg:circle><svg:circle cx="36.2" cy="19.6" r="11.5" fill="#3f3f3f"></svg:circle><svg:circle cx="53.4" cy="36.7" r="11.5" fill="#3f3f3f"></svg:circle><svg:path fill="#3f3f3f" d="M38.7 38.8c1.2 7.9 7 20.5 8.9 21.3H24.9c2-.9 8.4-15.1 9-22.8l.3-.9l4.8 1.5z"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M38.7 38.8c1.2 7.9 7 20.5 8.9 21.3H24.9c2-.9 8.4-15.1 9-22.8"></svg:path><svg:circle cx="36.2" cy="19.6" r="11.5"></svg:circle><svg:circle cx="53.4" cy="36.7" r="11.5"></svg:circle><svg:circle cx="19" cy="36.7" r="11.5"></svg:circle></svg:g>`,
})
export class OpenmojiClubSuitIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
