import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarIphoneBrokenIcon],svg[solar-iphone-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M20 14c0 3.771 0 5.657-1.172 6.828S15.771 22 12 22s-5.657 0-6.828-1.172S4 17.771 4 14v-4c0-3.771 0-5.657 1.172-6.828S8.229 2 12 2s5.657 0 6.828 1.172S20 6.229 20 10m-5 9H9"></svg:path><svg:path d="m16.748 2.378l-.084.126c-.756 1.134-1.134 1.701-1.686 2.044a3 3 0 0 1-.342.183c-.592.27-1.273.27-2.636.27s-2.045 0-2.636-.27a3 3 0 0 1-.342-.183c-.552-.343-.93-.91-1.686-2.044l-.084-.126"></svg:path></svg:g>`,
})
export class SolarIphoneBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
