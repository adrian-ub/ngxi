import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elArrowRightIcon],svg[el-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1200 600L496.875 131.25v252.539H0v432.422h496.875v252.539z"></svg:path>`,
})
export class ElArrowRightIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
