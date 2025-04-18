import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faSolidLuggageCartIcon],svg[fa-solid-luggage-cart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 320h32V96h-32c-17.67 0-32 14.33-32 32v160c0 17.67 14.33 32 32 32m352-32V128c0-17.67-14.33-32-32-32h-32v224h32c17.67 0 32-14.33 32-32m48 96H128V16c0-8.84-7.16-16-16-16H16C7.16 0 0 7.16 0 16v32c0 8.84 7.16 16 16 16h48v368c0 8.84 7.16 16 16 16h82.94c-1.79 5.03-2.94 10.36-2.94 16c0 26.51 21.49 48 48 48s48-21.49 48-48c0-5.64-1.15-10.97-2.94-16h197.88c-1.79 5.03-2.94 10.36-2.94 16c0 26.51 21.49 48 48 48s48-21.49 48-48c0-5.64-1.15-10.97-2.94-16H624c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16M480 96V48c0-26.51-21.49-48-48-48h-96c-26.51 0-48 21.49-48 48v272h192zm-48 0h-96V48h96z"></svg:path>`,
})
export class FaSolidLuggageCartIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}
