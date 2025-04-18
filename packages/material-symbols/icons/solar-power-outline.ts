import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSolarPowerOutlineIcon],svg[material-symbols-solar-power-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2 22l2-10h16l2 10zM3 4V2h3v2zm1.45 16H11v-2H4.85zM6.125 9.325L4.7 7.925L6.825 5.8L8.25 7.2zM5.25 16H11v-2H5.65zM12 7Q9.925 7 8.463 5.537T7 2h2q0 1.25.875 2.125T12 5t2.125-.875T15 2h2q0 2.075-1.463 3.538T12 7m-1 4V8h2v3zm2 9h6.55l-.4-2H13zm0-4h5.75l-.4-2H13zm4.875-6.675l-2.1-2.125l1.4-1.4L19.3 7.9zM18 4V2h3v2z"></svg:path>`,
})
export class MaterialSymbolsSolarPowerOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
