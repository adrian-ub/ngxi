import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiUfoIcon],svg[mdi-ufo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.94 10.28C15.66 7.87 14 6 12 6s-3.66 1.87-3.94 4.28C4.5 10.82 2 12.06 2 13.5C2 15.43 6.5 17 12 17s10-1.57 10-3.5c0-1.44-2.5-2.68-6.06-3.22"></svg:path>`,
})
export class MdiUfoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
