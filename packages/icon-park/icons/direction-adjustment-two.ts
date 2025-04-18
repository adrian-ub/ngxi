import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkDirectionAdjustmentTwoIcon],svg[icon-park-direction-adjustment-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M18 10L24 4M24 4L30 10M24 4V14"></svg:path><svg:path d="M18 38L24 44M24 44L30 38M24 44V34"></svg:path><svg:path d="M38 18L44 24M44 24L38 30M44 24H34"></svg:path><svg:path d="M10 18L4 24M4 24L10 30M4 24H14"></svg:path><svg:circle cx="24" cy="24" r="4" fill="#2F88FF"></svg:circle></svg:g>`,
})
export class IconParkDirectionAdjustmentTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
