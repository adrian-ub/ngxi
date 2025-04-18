import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsWordsOfWondersCrosswordIcon],svg[arcticons-words-of-wonders-crossword-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="32.055" r="7.875" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="12.375" cy="17.945" r="7.875" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="35.625" cy="17.945" r="7.875" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m16.669 14.191l-2.13 8.521l-2.13-8.521l-2.13 8.521l-2.13-8.521m15.798 22.124c-1.598 0-2.77-1.278-2.77-2.769V30.67c0-1.597 1.279-2.875 2.77-2.875h0a2.864 2.864 0 0 1 2.876 2.875v2.77a2.864 2.864 0 0 1-2.876 2.875m15.972-22.124l-2.13 8.521l-2.13-8.521l-2.13 8.521l-2.13-8.521M18.933 26.035l-1.853-1.79m13.846 0l-1.854 1.79"></svg:path>`,
})
export class ArcticonsWordsOfWondersCrosswordIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
