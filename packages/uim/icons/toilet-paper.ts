import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uimToiletPaperIcon],svg[uim-toilet-paper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:ellipse cx="7" cy="7.993" fill="currentColor" rx="1" ry="1.25"></svg:ellipse><svg:path fill="currentColor" d="M7 2C4.243 2 2 4.691 2 8s2.243 6 5 6s5-2.691 5-6s-2.243-6-5-6m0 7.243a1.146 1.146 0 0 1-1-1.25a1.146 1.146 0 0 1 1-1.25a1.146 1.146 0 0 1 1 1.25a1.146 1.146 0 0 1-1 1.25" opacity=".5"></svg:path><svg:path fill="currentColor" d="M22.76 20.35A7.5 7.5 0 0 1 21 15.459V8c0-3.309-2.243-6-5-6H7c2.757 0 5 2.691 5 6v7.459a9.5 9.5 0 0 0 2.24 6.191A1 1 0 0 0 15 22h7a1 1 0 0 0 .76-1.65" opacity=".25"></svg:path><svg:path fill="currentColor" d="M12 8c0 3.309-2.243 6-5 6h5Z"></svg:path>`,
})
export class UimToiletPaperIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
