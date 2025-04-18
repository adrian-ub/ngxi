import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riArrowRightDownLineIcon],svg[ri-arrow-right-down-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.59 16.003L5.983 7.397l1.414-1.415l8.607 8.607V7.003h2v11h-11v-2z"></svg:path>`,
})
export class RiArrowRightDownLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
