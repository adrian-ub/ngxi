import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineCrossRingTwoIcon],svg[icon-park-outline-cross-ring-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M19.455 26.444C17.636 28.222 15.817 30 12.182 30C8.545 30 4 27.333 4 22s4.545-8 8.182-8c5.454 0 8.182 3.556 11.818 8s6.364 8 11.818 8C39.455 30 44 27.333 44 22s-4.545-8-8.182-8c-3.636 0-6.363 2.667-7.272 3.556"></svg:path>`,
})
export class IconParkOutlineCrossRingTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
