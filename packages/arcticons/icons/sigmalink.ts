import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSigmalinkIcon],svg[arcticons-sigmalink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.85 26.15c.29-2.27 2.37-10.71 13.79-10.71c7.84 0 9.84 1.88 9.84 1.88l-3.86-4.14a40 40 0 0 0-9.84-1.11c-5.88 0-17.78.63-17.78 3.86s7.85 10.22 7.85 10.22M36 21.34c-.32 2.27-2.59 10.71-15.12 10.71A64.8 64.8 0 0 1 4.5 29.76l4.23 4.15a58.8 58.8 0 0 0 16.33 2c9.76 0 18.44-2.6 18.44-5.83S36 21.34 36 21.34"></svg:path>`,
})
export class ArcticonsSigmalinkIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
