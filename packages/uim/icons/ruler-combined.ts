import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uimRulerCombinedIcon],svg[uim-ruler-combined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 10h-2V7a1 1 0 0 1 1-1a1 1 0 0 1 1 1zM9 6a1 1 0 0 0-1 1v1H7a1 1 0 0 0 0 2h3V7a1 1 0 0 0-1-1m1 6v2H7a1 1 0 0 1-1-1a1 1 0 0 1 1-1z"></svg:path><svg:path fill="currentColor" d="M10 12v2H7a1 1 0 0 1-1-1a1 1 0 0 1 1-1Z"></svg:path><svg:path fill="currentColor" d="M21 2H3a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3H7a1 1 0 0 1 0-2h3v-2H7a1 1 0 0 1 0-2h3v-2H7a1 1 0 0 1 0-2h1V7a1 1 0 0 1 2 0v3h2V7a1 1 0 0 1 2 0v3h2V7a1 1 0 0 1 2 0v3h3a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1" opacity=".5"></svg:path><svg:path fill="currentColor" d="M10 16v2H7a1 1 0 0 1-1-1a1 1 0 0 1 1-1zm8-6h-2V7a1 1 0 0 1 1-1a1 1 0 0 1 1 1z"></svg:path>`,
})
export class UimRulerCombinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
