import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerDropletXIcon],svg[tabler-droplet-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.953 13.467a6.6 6.6 0 0 0-.889-2.59l-4.89-7.26c-.42-.625-1.287-.803-1.936-.397a1.4 1.4 0 0 0-.41.397l-4.893 7.26C4.24 13.715 4.9 17.318 7.502 19.423a7.18 7.18 0 0 0 5.633 1.49M22 22l-5-5m0 5l5-5"></svg:path>`,
})
export class TablerDropletXIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
