import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixItemDetailsIcon],svg[ix-item-details-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M469.334 85.333v341.333H42.667V85.333zM426.667 128H85.334v256h341.333zM384 298.666v32H277.334v-32zm0-64v32H277.334v-32zm-149.333-64V256H128v-85.334zm149.333 0v32H277.334v-32z"></svg:path>`,
})
export class IxItemDetailsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
