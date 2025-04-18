import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignVehicleFilledIcon],svg[tdesign-vehicle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h.586l-.5.5L3.5 21.914L5.414 20H8v-8H2V5h11v2h2V5a2 2 0 0 0-2-2zm1 12h2.004v2.004H3z"></svg:path><svg:path fill="currentColor" d="M21.677 8H11.323L9 13.807V21.5h2V20h11v1.5h2v-7.693zm-.554 4h-9.246l.8-2h7.646zM12 15h2.004v2.004H12zm9.004 0v2.004H19V15z"></svg:path>`,
})
export class TdesignVehicleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
