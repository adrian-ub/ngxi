import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiAxisXArrowIcon],svg[mdi-axis-x-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.5 20.5L3 15.03l1.46 2.57L11 13.82V3h2v10.82l9.39 5.43l-1 1.75L12 15.56l-6.54 3.77L7 21.96z"></svg:path>`,
})
export class MdiAxisXArrowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
