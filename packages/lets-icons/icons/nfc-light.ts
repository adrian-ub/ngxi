import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsNfcLightIcon],svg[lets-icons-nfc-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="m6 8l5 8m6.722 4.5a17 17 0 0 0 0-17M14.392 18a12 12 0 0 0 0-12m-3.464 10a8 8 0 0 0 0-8m-4.856 8a8 8 0 0 1 0-8"></svg:path>`,
})
export class LetsIconsNfcLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
