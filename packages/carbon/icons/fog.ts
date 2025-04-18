import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonFogIcon],svg[carbon-fog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24.8 11.138a8.994 8.994 0 0 0-17.6 0A6.53 6.53 0 0 0 2 17.5V19a1 1 0 0 0 1 1h12a1 1 0 0 0 0-2H4v-.497a4.52 4.52 0 0 1 4.144-4.482l.816-.064l.099-.812a6.994 6.994 0 0 1 13.883 0l.099.813l.815.063A4.496 4.496 0 0 1 23.5 22H7a1 1 0 0 0 0 2h16.5a6.496 6.496 0 0 0 1.3-12.862"></svg:path><svg:rect width="18" height="2" x="2" y="26" fill="currentColor" rx="1"></svg:rect>`,
})
export class CarbonFogIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
