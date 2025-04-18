import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiSpotBulbTopIcon],svg[cbi-spot-bulb-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 22v-2H2v2zm-2-4"></svg:path>`,
})
export class CbiSpotBulbTopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
