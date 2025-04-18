import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignStreetRoadIcon],svg[tdesign-street-road-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v20H2zm2 2v16h16V4zm14.372 2.343L6.657 13.372l-1.029-1.715l2.111-1.267L5.64 6.611l1.749-.97l2.066 3.72l7.888-4.733zm0 6l-2.111 1.267l2.099 3.779l-1.748.97l-2.067-3.72l-7.888 4.733l-1.029-1.715l11.715-7.029z"></svg:path>`,
})
export class TdesignStreetRoadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
