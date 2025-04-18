import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riAedElectrodesFillIcon],svg[ri-aed-electrodes-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 3a1 1 0 0 0-1 1v3H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h5v2h2v-2h5a1 1 0 0 0 1-1v-3h3a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm9 12V8a1 1 0 0 0-1-1H9V5h10v10z"></svg:path>`,
})
export class RiAedElectrodesFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
