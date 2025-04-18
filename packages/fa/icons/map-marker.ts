import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faMapMarkerIcon],svg[fa-map-marker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 512q0-106-75-181t-181-75t-181 75t-75 181t75 181t181 75t181-75t75-181m256 0q0 109-33 179l-364 774q-16 33-47.5 52t-67.5 19t-67.5-19t-46.5-52L33 691Q0 621 0 512q0-212 150-362T512 0t362 150t150 362"></svg:path>`,
})
export class FaMapMarkerIcon {
  readonly viewBox = input("0 0 1024 1536")
  readonly width = input("0.67em")
  readonly height = input("1em")
}
