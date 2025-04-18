import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineDirectionAdjustmentThreeIcon],svg[icon-park-outline-direction-adjustment-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m18 10l6-6m0 0l6 6m-6-6v20m0 0v20m0-20h20m-20 0H4m14 14l6 6m0 0l6-6m8-20l6 6m0 0l-6 6M10 18l-6 6m0 0l6 6"></svg:path>`,
})
export class IconParkOutlineDirectionAdjustmentThreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
