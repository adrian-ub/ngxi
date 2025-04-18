import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirNetworkRightIcon],svg[iconoir-network-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:rect width="7" height="5" rx=".6" transform="matrix(0 -1 -1 0 22 21)"></svg:rect><svg:rect width="7" height="5" rx=".6" transform="matrix(0 -1 -1 0 7 15.5)"></svg:rect><svg:rect width="7" height="5" rx=".6" transform="matrix(0 -1 -1 0 22 10)"></svg:rect><svg:path d="M17 17.5h-3.5a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2H17M11.5 12H7"></svg:path></svg:g>`,
})
export class IconoirNetworkRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
