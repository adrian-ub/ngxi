import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkFutureBuildThreeIcon],svg[icon-park-future-build-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path d="M20 8L24 4L28 8V44H20V8Z"></svg:path><svg:path stroke-linecap="round" d="M12 20L20 12V44H12V20Z"></svg:path><svg:path stroke-linecap="round" d="M4 35L12 28V44H4V35Z"></svg:path><svg:path stroke-linecap="round" d="M28 12L36 20V44H28V12Z"></svg:path><svg:path stroke-linecap="round" d="M36 28L44 34.5V44H36V28Z"></svg:path></svg:g>`,
})
export class IconParkFutureBuildThreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
