import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkDirectionAdjustmentIcon],svg[icon-park-direction-adjustment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M20 8L24 4M24 4L28 8M24 4V16"></svg:path><svg:path d="M20 40L24 44M24 44L28 40M24 44V32"></svg:path><svg:path d="M40 20L44 24M44 24L40 28M44 24H32"></svg:path><svg:path d="M8 20L4 24M4 24L8 28M4 24H16"></svg:path><svg:circle cx="24" cy="24" r="2"></svg:circle></svg:g>`,
})
export class IconParkDirectionAdjustmentIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
