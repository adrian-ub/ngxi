import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiAxisYArrowIcon],svg[mdi-axis-y-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.5 20.5L17 21.96l1.53-2.61L12 15.58L2.61 21l-1-1.73L11 13.85V3h2v10.85l6.53 3.76L21 15.03z"></svg:path>`,
})
export class MdiAxisYArrowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
