import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiDigitalOceanIcon],svg[mdi-digital-ocean-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 12H2C2 6.5 6.5 2 12 2s10 4.5 10 10s-4.5 10-10 10v-4H8v-4h4v4c3.32 0 6-2.69 6-6s-2.69-6-6-6s-6 2.69-6 6m2 6v3H5v-3zm-5-2h2v2H3z"></svg:path>`,
})
export class MdiDigitalOceanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
