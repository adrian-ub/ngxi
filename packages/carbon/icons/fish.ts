import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonFishIcon],svg[carbon-fish-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="7" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M26 2a16.02 16.02 0 0 0-16 16v2H3a1 1 0 0 0-.707 1.707l8 8A1 1 0 0 0 12 29v-7h2A16.02 16.02 0 0 0 30 6V2ZM10 26.586L5.414 22H10ZM12 20v-2a13.94 13.94 0 0 1 3.908-9.678l7.77 7.77A13.94 13.94 0 0 1 14 20ZM28 6a13.9 13.9 0 0 1-2.98 8.606L17.395 6.98A13.9 13.9 0 0 1 26 4h2Z"></svg:path>`,
})
export class CarbonFishIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
