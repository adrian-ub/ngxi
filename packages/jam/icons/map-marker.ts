import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamMapMarkerIcon],svg[jam-map-marker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 7A5 5 0 1 0 2 7c0 1.726 1.66 5.031 5 9.653c3.34-4.622 5-7.927 5-9.653M7 20Q0 10.865 0 7a7 7 0 1 1 14 0q0 3.865-7 13m0-9a4 4 0 1 1 0-8a4 4 0 0 1 0 8m0-2a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class JamMapMarkerIcon {
  readonly viewBox = input("-5 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
