import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nimbusDrinkIcon],svg[nimbus-drink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="4.96" cy="9.98" r=".63" fill="currentColor"></svg:circle><svg:circle cx="5.9" cy="8.55" r=".31" fill="currentColor"></svg:circle><svg:path fill="currentColor" fill-rule="evenodd" d="M15.15 9v-.09a3 3 0 0 0 0-.27v-.33a2 2 0 0 1-.15-.25v-.27c0-.09 0-.17-.08-.25a1.4 1.4 0 0 1-.08-.22v-.05a2 2 0 0 1-.1-.23a2 2 0 0 0-.1-.2l-.12-.23v-.09a6.4 6.4 0 0 0-1-1.24h-2.75l.65-2.44a.67.67 0 0 1 .32-.4a.61.61 0 0 1 .51 0l1.87.71l.45-1.16L12.7 1a1.88 1.88 0 0 0-2.49 1.27l-.73 2.78H7.31a3.15 3.15 0 0 0-3.23-2.86a3.13 3.13 0 0 0-3.23 3A3 3 0 0 0 2.79 8a2 2 0 0 1 0 .25v.31a3 3 0 0 0 0 .27v.45A6.06 6.06 0 0 0 8.9 15.1a6.06 6.06 0 0 0 6.25-5.85zM8.9 13.85a4.81 4.81 0 0 1-5-4.6A4.4 4.4 0 0 1 5.06 6.3h7.69a4.4 4.4 0 0 1 1.15 3a4.81 4.81 0 0 1-5 4.55M2.1 5.23a1.89 1.89 0 0 1 2-1.79a1.93 1.93 0 0 1 2 1.61H4.53a6 6 0 0 0-1 1.24v.08l-.12.23a1.4 1.4 0 0 0-.08.18A1.8 1.8 0 0 1 2.1 5.23"></svg:path>`,
})
export class NimbusDrinkIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
