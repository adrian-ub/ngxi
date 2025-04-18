import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageMediaReelVIcon],svg[mage-media-reel-v-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M15.875 3.04v17.92M8.125 3.04v17.92M20.96 12H3.04m0 4.843h5.085m7.75 0h5.085M3.04 7.157h5.085m7.75 0h5.085"></svg:path><svg:rect width="18.5" height="18.5" x="2.75" y="2.75" rx="6"></svg:rect></svg:g>`,
})
export class MageMediaReelVIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
