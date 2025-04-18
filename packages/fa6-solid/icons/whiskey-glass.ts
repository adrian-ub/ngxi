import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6SolidWhiskeyGlassIcon],svg[fa6-solid-whiskey-glass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 32c-9.3 0-18.1 4-24.2 11.1S-1 59.4.3 68.6l50 342.9C56 450.8 89.7 480 129.5 480h253c39.7 0 73.4-29.1 79.2-68.5l50-342.9c1.3-9.2-1.4-18.5-7.5-25.5S489.3 32 480 32zm55.7 192L69 96h374l-18.7 128z"></svg:path>`,
})
export class Fa6SolidWhiskeyGlassIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
