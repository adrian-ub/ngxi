import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsNfcIcon],svg[lets-icons-nfc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m5 8l5 8m8.722 4.5a17 17 0 0 0 0-17M14.392 18a12 12 0 0 0 0-12M9.928 16a8 8 0 0 0 0-8m-4.856 8a8 8 0 0 1 0-8"></svg:path>`,
})
export class LetsIconsNfcIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
