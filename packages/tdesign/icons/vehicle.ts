import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignVehicleIcon],svg[tdesign-vehicle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v2h-2V5H2v7h6v2H2v4h6v2H5.414L3.5 21.914L2.086 20.5l.5-.5H2a2 2 0 0 1-2-2zm11.323 3h10.354L24 13.807V21.5h-2V20H11v1.5H9v-7.693zM11 18h11v-3.807L21.923 14H11.077l-.077.193zm.877-6h9.246l-.8-2h-7.646zM3 15h2.004v2.004H3zm9 0h2.004v2.004H12zm7 0h2.004v2.004H19z"></svg:path>`,
})
export class TdesignVehicleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
