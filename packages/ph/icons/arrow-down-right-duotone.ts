import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowDownRightDuotoneIcon],svg[ph-arrow-down-right-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M192 88v104H88Z" opacity=".2"></svg:path><svg:path d="M195.06 80.61a8 8 0 0 0-8.72 1.73L140 128.69L69.66 58.34a8 8 0 0 0-11.32 11.32L128.69 140l-46.35 46.34A8 8 0 0 0 88 200h104a8 8 0 0 0 8-8V88a8 8 0 0 0-4.94-7.39M184 184h-76.69l38.34-38.34L184 107.31Z"></svg:path></svg:g>`,
})
export class PhArrowDownRightDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
