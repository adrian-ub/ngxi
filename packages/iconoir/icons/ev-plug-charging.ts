import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirEvPlugChargingIcon],svg[iconoir-ev-plug-charging-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M10 13.154V21m5-12.615v2.769a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-2.77a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2Zm-1.667-2V3M6.667 6.385V3"></svg:path><svg:path stroke-linejoin="round" d="M16.667 16L15 19h4l-1.667 3"></svg:path></svg:g>`,
})
export class IconoirEvPlugChargingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
