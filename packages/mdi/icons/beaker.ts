import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBeakerIcon],svg[mdi-beaker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3v2a2 2 0 0 1 2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 1 2-2V3zm4 6h3v1H7zm0 2h3v1H7zm3 5H7v-1h3zm2-2H7v-1h5zm0-6H7V7h5z"></svg:path>`,
})
export class MdiBeakerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
