import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirNetworkIcon],svg[iconoir-network-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:rect width="7" height="5" x="3" y="2" rx=".6"></svg:rect><svg:rect width="7" height="5" x="8.5" y="17" rx=".6"></svg:rect><svg:rect width="7" height="5" x="14" y="2" rx=".6"></svg:rect><svg:path d="M6.5 7v3.5a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V7M12 12.5V17"></svg:path></svg:g>`,
})
export class IconoirNetworkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
