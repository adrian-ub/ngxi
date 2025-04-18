import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineSurveillanceCamerasTwoIcon],svg[icon-park-outline-surveillance-cameras-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M19.006 26.276V37H5m37.62-15.785l-3.863-1.035l-4.003 7.21l5.796 1.553z"></svg:path><svg:path d="m38.757 20.18l-4.003 7.21l-1.742 2.639L5 22.523L8.623 9L40.5 17.541z"></svg:path></svg:g>`,
})
export class IconParkOutlineSurveillanceCamerasTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
