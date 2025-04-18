import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconPurseOutlineIcon],svg[lsicon-purse-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M6 9h4m-4 2h4m-2 2V8.5m0 0L9.5 7M8 8.5L6.5 7M5 5c-.8-.8-.96-1.36-.8-1.743C4.44 2.68 5.4 2.5 6 2.5c1.055 0 1-1 2-1s1 1 2 1c.459 0 1.447.18 1.732.757c.19.384.068.943-.732 1.743m2.5 5c.424 2.97-1.91 4.5-5.5 4.5S2.076 12.97 2.5 10C3 6.5 5.37 4.5 8 4.5s5 2 5.5 5.5Z"></svg:path>`,
})
export class LsiconPurseOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
