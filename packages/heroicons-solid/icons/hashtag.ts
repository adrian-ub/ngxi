import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsSolidHashtagIcon],svg[heroicons-solid-hashtag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.243 3.03a1 1 0 0 1 .727 1.213L9.53 6h2.94l.56-2.243a1 1 0 1 1 1.94.486L14.53 6H17a1 1 0 1 1 0 2h-2.97l-1 4H15a1 1 0 1 1 0 2h-2.47l-.56 2.242a1 1 0 1 1-1.94-.485L10.47 14H7.53l-.56 2.242a1 1 0 1 1-1.94-.485L5.47 14H3a1 1 0 1 1 0-2h2.97l1-4H5a1 1 0 1 1 0-2h2.47l.56-2.243a1 1 0 0 1 1.213-.727M9.03 8l-1 4h2.938l1-4z" clip-rule="evenodd"></svg:path>`,
})
export class HeroiconsSolidHashtagIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
