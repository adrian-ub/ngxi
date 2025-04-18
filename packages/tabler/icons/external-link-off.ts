import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerExternalLinkOffIcon],svg[tabler-external-link-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-1m-7-3l2-2m2.007-2.007l6-6M15 4h5v5M3 3l18 18"></svg:path>`,
})
export class TablerExternalLinkOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
