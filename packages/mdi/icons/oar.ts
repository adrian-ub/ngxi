import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiOarIcon],svg[mdi-oar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.23 15.21c-1.46-1.46-5.26-5.01-7.46-3.94L4.5 3L3 4.5l8.28 8.29c-.98 2.21 2.6 5.83 4.07 7.29c1.76 1.76 2.91.84 4.26-.51c1.49-1.49 2-2.96.62-4.36"></svg:path>`,
})
export class MdiOarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
