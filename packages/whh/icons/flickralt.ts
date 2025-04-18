import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhFlickraltIcon],svg[whh-flickralt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-640.5-704q-79.5 0-135.5 56t-56 135.5t56 136t135.5 56.5t136-56.5t56.5-136t-56.5-135.5t-136-56m512.5 0q-80 0-136 56t-56 135.5t56 136t135.5 56.5t136-56.5t56.5-136t-56-135.5t-136-56"></svg:path>`,
})
export class WhhFlickraltIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
