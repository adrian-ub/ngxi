import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSlippersIcon],svg[icon-park-solid-slippers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M4 29h40v6H4z"></svg:path><svg:path fill="currentColor" d="M23.53 13c-3.5 4-3.5 12-3.5 16h20v-8.5S28 15 23.53 13"></svg:path></svg:g>`,
})
export class IconParkSolidSlippersIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
