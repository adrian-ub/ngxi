import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceLibraryIcon],svg[guidance-library-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M12 7.5V17m0-9.5a3 3 0 0 0-3-3H2v1.085A63 63 0 0 1 .5 19.25v.25H9a3 3 0 0 1 3 3m0-15a3 3 0 0 1 3-3h7v1.085c0 4.596.503 9.179 1.5 13.665v.25H15a3 3 0 0 0-3 3m0 0v.5"></svg:path>`,
})
export class GuidanceLibraryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
