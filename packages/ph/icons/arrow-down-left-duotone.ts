import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowDownLeftDuotoneIcon],svg[ph-arrow-down-left-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M168 192H64V88Z" opacity=".2"></svg:path><svg:path d="M197.66 58.34a8 8 0 0 0-11.32 0L116 128.69L69.66 82.34A8 8 0 0 0 56 88v104a8 8 0 0 0 8 8h104a8 8 0 0 0 5.66-13.66L127.31 140l70.35-70.34a8 8 0 0 0 0-11.32M72 184v-76.69l38.34 38.34L148.69 184Z"></svg:path></svg:g>`,
})
export class PhArrowDownLeftDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
