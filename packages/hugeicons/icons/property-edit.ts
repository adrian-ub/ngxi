import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPropertyEditIcon],svg[hugeicons-property-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 11.5c0-4.478 0-6.718-1.391-8.109S15.979 2 11.5 2C7.022 2 4.782 2 3.391 3.391S2 7.021 2 11.5c0 4.478 0 6.718 1.391 8.109c1.339 1.338 3.462 1.389 7.609 1.39M2 7h19m-11 9h1.5M6 16h1m3-4h6M6 12h1m14.263 2.872c-.9-1.007-1.442-.947-2.042-.767c-.42.06-1.863 1.737-2.463 2.271c-.987.972-1.977 1.972-2.043 2.102c-.187.303-.36.84-.444 1.438c-.157.899-.467 1.866-.096 1.997c.18.24 1.08-.08 1.982-.211c.6-.108 1.021-.228 1.322-.408c.42-.251 1.201-1.138 2.547-2.456c.844-.886 1.658-1.498 1.898-2.097c.24-.899-.12-1.378-.66-1.87" color="currentColor"></svg:path>`,
})
export class HugeiconsPropertyEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
