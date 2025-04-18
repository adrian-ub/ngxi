import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignDam5Icon],svg[tdesign-dam-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v2h-1v16h1v2H2v-2h1V4H2zm3 2v16h2V4zm4 0v7c.836-.628 1.874-1 3-1s2.164.372 3 1V4zm8 0v16h2V4zm-2 16v-5a3 3 0 1 0-6 0v5z"></svg:path>`,
})
export class TdesignDam5Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
