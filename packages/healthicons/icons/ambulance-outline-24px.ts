import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsAmbulanceOutline24pxIcon],svg[healthicons-ambulance-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M18 3a1 1 0 1 0-2 0v1.5a1 1 0 1 0 2 0zM7.5 12v-1.5H6v-2h1.5V7h2v1.5H11v2H9.5V12z"></svg:path><svg:path fill-rule="evenodd" d="M8.95 19q.05.243.05.5a2.5 2.5 0 1 1-4.95-.5H2V5a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v4h1V8a1 1 0 1 1 2 0v1h.092a2 2 0 0 1 1.728.992l1.908 3.27A2 2 0 0 1 22 14.27V19h-2.05q.05.243.05.5a2.5 2.5 0 1 1-4.95-.5zM4 17v-2h9v2zm9-4H4V6h9zm2 4v-2h5v2zm0-4h4.259l-1.167-2H15zm2.5 6a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1m-11 0a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1" clip-rule="evenodd"></svg:path><svg:path d="m21.207 5.207l-1.06 1.06a1 1 0 1 1-1.415-1.413l1.06-1.061a1 1 0 1 1 1.415 1.414M22 9a1 1 0 1 0 0-2h-1.5a1 1 0 1 0 0 2z"></svg:path></svg:g>`,
})
export class HealthiconsAmbulanceOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
