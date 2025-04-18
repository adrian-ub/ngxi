import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesPluginKimOutlineIcon],svg[bubbles-plugin-kim-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.449 9.283a1.5 1.5 0 0 0-.3 2.356l8.213 8.213a1.5 1.5 0 0 0 2.356-.3a7.52 7.52 0 0 0 .81-5.54l6.529-4.155a1.5 1.5 0 0 0 .256-2.326L17.47 1.688a1.5 1.5 0 0 0-2.326.255l-4.155 6.53a7.52 7.52 0 0 0-5.54.81m3.804 6.463L1.25 23.749"></svg:path>`,
})
export class BubblesPluginKimOutlineIcon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}
