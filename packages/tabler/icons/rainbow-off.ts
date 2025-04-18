import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerRainbowOffIcon],svg[tabler-rainbow-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M22 17c0-5.523-4.477-10-10-10q-.462 0-.914.041m-3.208.845A10 10 0 0 0 2 17m9.088-5.931A6 6 0 0 0 6 17m8 0a2 2 0 1 0-4 0M3 3l18 18"></svg:path>`,
})
export class TablerRainbowOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
