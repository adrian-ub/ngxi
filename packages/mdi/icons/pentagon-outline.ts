import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPentagonOutlineIcon],svg[mdi-pentagon-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 5l7.6 5.5l-2.9 8.9H7.3l-2.9-8.9zm0-2.5L2 9.8l3.8 11.7h12.3L22 9.8z"></svg:path>`,
})
export class MdiPentagonOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
