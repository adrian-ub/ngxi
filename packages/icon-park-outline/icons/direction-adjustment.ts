import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineDirectionAdjustmentIcon],svg[icon-park-outline-direction-adjustment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="m20 8l4-4m0 0l4 4m-4-4v12m-4 24l4 4m0 0l4-4m-4 4V32m16-12l4 4m0 0l-4 4m4-4H32M8 20l-4 4m0 0l4 4m-4-4h12"></svg:path><svg:circle cx="24" cy="24" r="2"></svg:circle></svg:g>`,
})
export class IconParkOutlineDirectionAdjustmentIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
