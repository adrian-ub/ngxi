import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirNetworkLeftSolidIcon],svg[iconoir-network-left-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:rect width="7" height="5" x="2" y="21" fill="currentColor" rx=".6" transform="rotate(-90 2 21)"></svg:rect><svg:rect width="7" height="5" x="17" y="15.5" fill="currentColor" rx=".6" transform="rotate(-90 17 15.5)"></svg:rect><svg:rect width="7" height="5" x="2" y="10" fill="currentColor" rx=".6" transform="rotate(-90 2 10)"></svg:rect><svg:path d="M7 17.5h3.5a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2H7m5.5 5.5H17"></svg:path></svg:g>`,
})
export class IconoirNetworkLeftSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
