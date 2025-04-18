import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsAmbulanceIcon],svg[healthicons-ambulance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M32 12.5a1 1 0 1 0 2 0V11a1 1 0 1 0-2 0z"></svg:path><svg:path fill-rule="evenodd" d="M4 16a2 2 0 0 1 2-2h22a2 2 0 0 1 1.732 1H30v4h1v-1h1v-1a1 1 0 1 1 2 0v1h1v1h.718a3 3 0 0 1 2.035.796l5.282 4.875A3 3 0 0 1 44 26.876V35h-5.126a4.002 4.002 0 0 1-7.748 0H15.874a4.002 4.002 0 0 1-7.748 0H4zm38 12H30v5h1.126a4.002 4.002 0 0 1 7.748 0H42zm-12-2h11.526l-5.13-4.735a1 1 0 0 0-.678-.265H30zM12 36a2 2 0 1 0 0-4a2 2 0 0 0 0 4m25-2a2 2 0 1 1-4 0a2 2 0 0 1 4 0M13 22h3v-3h2v3h3v2h-3v3h-2v-3h-3z" clip-rule="evenodd"></svg:path><svg:path d="M36.5 17a1 1 0 0 1 1-1H39a1 1 0 1 1 0 2h-1.5a1 1 0 0 1-1-1m-.671-4.241a1 1 0 1 0 1.343 1.482l.914-.828a1 1 0 0 0-1.343-1.482z"></svg:path></svg:g>`,
})
export class HealthiconsAmbulanceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
