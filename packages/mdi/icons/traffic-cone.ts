import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTrafficConeIcon],svg[mdi-traffic-cone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17 15l1 4h3v3H3v-3h3l1-4zm-2-7l1 4H8l1-4zm-2-7l1 4h-4l1-4z"></svg:path>`,
})
export class MdiTrafficConeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
