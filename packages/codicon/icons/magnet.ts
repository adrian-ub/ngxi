import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconMagnetIcon],svg[codicon-magnet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 1.5c-3.9 0-7 3.1-7 7v5l1 1h3l1-1v-5c0-1.1.9-2 2-2s2 .9 2 2v5l1 1h3l1-1v-5c0-3.9-3.1-7-7-7m-3 12H2v-3h3zm9 0h-3v-3h3zm-3-4v-1c0-1.7-1.3-3-3-3c-1.6 0-2.9 1.3-3 2.8v1.2H2v-1c0-3.3 2.7-6 6-6s6 2.7 6 6v1z"></svg:path>`,
})
export class CodiconMagnetIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
