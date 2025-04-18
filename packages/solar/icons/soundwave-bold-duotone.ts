import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarSoundwaveBoldDuotoneIcon],svg[solar-soundwave-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 3.25a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-1.5 0V4a.75.75 0 0 1 .75-.75m-8 7a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75m16 0a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M16.75 7a.75.75 0 0 0-1.5 0v10a.75.75 0 0 0 1.5 0zm-8 0a.75.75 0 0 0-1.5 0v10a.75.75 0 0 0 1.5 0z" opacity=".5"></svg:path>`,
})
export class SolarSoundwaveBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
