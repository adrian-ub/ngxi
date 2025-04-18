import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerLinkOffIcon],svg[tabler-link-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 15l3-3m2-2l1-1m-4-3l.463-.536a5 5 0 0 1 7.071 7.072L18 13M3 3l18 18m-8-3l-.397.534a5.07 5.07 0 0 1-7.127 0a4.97 4.97 0 0 1 0-7.071L6 11"></svg:path>`,
})
export class TablerLinkOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
