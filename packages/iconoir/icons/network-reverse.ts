import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirNetworkReverseIcon],svg[iconoir-network-reverse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:rect width="7" height="5" rx=".6" transform="matrix(1 0 0 -1 3 22)"></svg:rect><svg:rect width="7" height="5" rx=".6" transform="matrix(1 0 0 -1 8.5 7)"></svg:rect><svg:rect width="7" height="5" rx=".6" transform="matrix(1 0 0 -1 14 22)"></svg:rect><svg:path d="M6.5 17v-3.5a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2V17M12 11.5V7"></svg:path></svg:g>`,
})
export class IconoirNetworkReverseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
