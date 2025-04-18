import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneFlagForMyanmarIcon],svg[emojione-flag-for-myanmar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ed4c5c" d="M32 62c13.1 0 24.2-8.3 28.3-20H3.7C7.8 53.7 18.9 62 32 62"></svg:path><svg:path fill="#ffe62e" d="M32 2C18.9 2 7.8 10.4 3.7 22h56.6C56.2 10.4 45.1 2 32 2"></svg:path><svg:path fill="#699635" d="M60.3 42c1.1-3.1 1.7-6.5 1.7-10s-.6-6.9-1.7-10H3.7C2.6 25.1 2 28.5 2 32s.6 6.9 1.7 10z"></svg:path><svg:path fill="#fff" d="M32 41.1L43.7 50l-4.4-14.5l11.7-9H36.5L32 12l-4.5 14.5H13l11.7 9L20.3 50z"></svg:path>`,
})
export class EmojioneFlagForMyanmarIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
