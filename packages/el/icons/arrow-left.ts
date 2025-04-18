import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elArrowLeftIcon],svg[el-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 600l703.125 468.75V816.211H1200V383.789H703.125V131.25z"></svg:path>`,
})
export class ElArrowLeftIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
