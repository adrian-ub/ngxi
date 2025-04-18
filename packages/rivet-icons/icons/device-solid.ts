import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[rivetIconsDeviceSolidIcon],svg[rivet-icons-device-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M0 1a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v5h-4a2 2 0 0 0-2 2v6H2v-2h4v-1H1a1 1 0 0 1-1-1z"></svg:path><svg:path d="M9 8a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1z"></svg:path></svg:g>`,
})
export class RivetIconsDeviceSolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
