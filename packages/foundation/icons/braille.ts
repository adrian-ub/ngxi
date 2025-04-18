import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[foundationBrailleIcon],svg[foundation-braille-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="31.102" cy="23.979" r="6.978" fill="currentColor"></svg:circle><svg:circle cx="68.898" cy="23.979" r="6.978" fill="currentColor"></svg:circle><svg:circle cx="31.102" cy="50" r="6.978" fill="currentColor"></svg:circle><svg:circle cx="68.898" cy="50" r="6.978" fill="currentColor"></svg:circle><svg:circle cx="31.102" cy="76.02" r="6.978" fill="currentColor"></svg:circle><svg:circle cx="68.898" cy="76.02" r="6.978" fill="currentColor"></svg:circle>`,
})
export class FoundationBrailleIcon {
  readonly viewBox = input("0 0 100 100")
  readonly width = input("1em")
  readonly height = input("1em")
}
