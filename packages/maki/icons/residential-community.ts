import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiResidentialCommunityIcon],svg[maki-residential-community-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.8 12.5V10c.7-.1 1.2-.7 1.2-1.5S12.3 7 11.5 7S10 7.7 10 8.5c0 .7.5 1.4 1.2 1.5v2.5H7V1H2v11.5H1v.5h13v-.5zM6 10H3V9h3zm0-2H3V7h3zm0-2H3V5h3zm0-2H3V3h3z"></svg:path>`,
})
export class MakiResidentialCommunityIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
