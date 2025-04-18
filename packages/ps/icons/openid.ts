import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psOpenidIcon],svg[ps-openid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M417 171q-62-36-134-46V6l-70 45v73q-45 4-86 19t-68 37.5t-44 50T2 287t24 55t68.5 48.5T213 426l70-45V173q39 6 90 28l-40 25h129v-85zm-204-2v212q-60-8-96.5-31T75 298.5t7.5-56.5t48-48.5T213 169"></svg:path>`,
})
export class PsOpenidIcon {
  readonly viewBox = input("0 0 464 472")
  readonly width = input("0.99em")
  readonly height = input("1em")
}
