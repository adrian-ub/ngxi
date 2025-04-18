import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandPushoverIcon],svg[tabler-brand-pushover-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.16 10.985C5.33 9.05 7.69 3 14.355 3C17.688 3 19 4.382 19 6.9c0 2.597-2.612 6.1-9 6.1m2.5-7L7 21"></svg:path>`,
})
export class TablerBrandPushoverIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
