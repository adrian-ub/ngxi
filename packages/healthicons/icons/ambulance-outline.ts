import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsAmbulanceOutlineIcon],svg[healthicons-ambulance-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M32 12.5a1 1 0 1 0 2 0V11a1 1 0 1 0-2 0zM16 24v3h2v-3h3v-2h-3v-3h-2v3h-3v2z"></svg:path><svg:path fill-rule="evenodd" d="M4 17a3 3 0 0 1 3-3h20a3 3 0 0 1 3 3v2h1v-1h1v-1a1 1 0 1 1 2 0v1h1v1h.718a3 3 0 0 1 2.035.796l5.282 4.875A3 3 0 0 1 44 26.876V35h-5.126a4.002 4.002 0 0 1-7.748 0H15.874a4.002 4.002 0 0 1-7.748 0H4zm27.126 16a4.002 4.002 0 0 1 7.748 0H42v-5H30v5zM30 26h11.526l-5.13-4.735a1 1 0 0 0-.678-.265H30zm-3-10a1 1 0 0 1 1 1v16H15.874a4.002 4.002 0 0 0-7.748 0H6V17a1 1 0 0 1 1-1zM12 36a2 2 0 1 0 0-4a2 2 0 0 0 0 4m25-2a2 2 0 1 1-4 0a2 2 0 0 1 4 0" clip-rule="evenodd"></svg:path><svg:path d="M36.5 17a1 1 0 0 1 1-1H39a1 1 0 1 1 0 2h-1.5a1 1 0 0 1-1-1m-.671-4.241a1 1 0 1 0 1.343 1.482l.914-.828a1 1 0 0 0-1.343-1.482z"></svg:path></svg:g>`,
})
export class HealthiconsAmbulanceOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
