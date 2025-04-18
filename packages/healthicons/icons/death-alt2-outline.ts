import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsDeathAlt2OutlineIcon],svg[healthicons-death-alt2-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M17.382 6.001L13.07 17.184l4.574 24.8l12.673.014l4.614-24.796l-4.294-11.19zm14.629-1.988L16.01 4L11 16.992l4.978 26.99l16 .018L37 17.013z"></svg:path><svg:path d="M23 17.997V26h2v-8.003h3v-2h-3V13h-2v2.997h-3v2z"></svg:path></svg:g>`,
})
export class HealthiconsDeathAlt2OutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
