import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBrackeysideIcon],svg[arcticons-brackeyside-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m16.11 20.42l-4.52-4.51L3.5 24L24 44.5h0l8.09-8.09l-4.51-4.52L24 35.47L12.53 24zm15.78 7.16l4.52 4.51L44.5 24L24 3.5h0l-8.09 8.09l4.51 4.52L24 12.53L35.47 24z"></svg:path>`,
})
export class ArcticonsBrackeysideIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
