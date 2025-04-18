import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerDropletDownIcon],svg[tabler-droplet-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.602 12.003a6.7 6.7 0 0 0-.538-1.126l-4.89-7.26c-.42-.625-1.287-.803-1.936-.397a1.4 1.4 0 0 0-.41.397l-4.893 7.26C4.24 13.715 4.9 17.318 7.502 19.423a7.16 7.16 0 0 0 4.972 1.564M19 16v6m3-3l-3 3l-3-3"></svg:path>`,
})
export class TablerDropletDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
