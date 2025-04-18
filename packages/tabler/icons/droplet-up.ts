import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerDropletUpIcon],svg[tabler-droplet-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.6 11.998a6.7 6.7 0 0 0-.536-1.12l-4.89-7.26c-.42-.626-1.287-.804-1.936-.398a1.4 1.4 0 0 0-.41.397l-4.893 7.26C4.24 13.715 4.9 17.318 7.502 19.423a7.16 7.16 0 0 0 5.002 1.562M19 22v-6m3 3l-3-3l-3 3"></svg:path>`,
})
export class TablerDropletUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
