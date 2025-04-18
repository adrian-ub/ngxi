import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixBatteryUprightFullCheckIcon],svg[ix-battery-upright-full-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M309.333 42.667v42.666H384v384H128v-384h74.667V42.667zm32 85.333H170.667v298.667h170.666zM320 249.088v156.245H192V286.165l61.982 61.987zm0-99.755v70.358l-21.917-14.608l-50.744 76.069L208 241.83l-16 15.962V149.333z" clip-rule="evenodd"></svg:path>`,
})
export class IxBatteryUprightFullCheckIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
