import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiArrowBottomLeftThickIcon],svg[mdi-arrow-bottom-left-thick-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.5 5.69l2.81 2.81l-6.37 6.39h4.95v3.42H5.69V7.11h3.43v4.95z"></svg:path>`,
})
export class MdiArrowBottomLeftThickIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
