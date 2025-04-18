import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpAddModeratorIcon],svg[ic-sharp-add-moderator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 10c1.08 0 2.09.25 3 .68V5l-8-3l-8 3v6.09c0 5.05 3.41 9.76 8 10.91c.03-.01.05-.02.08-.02A7 7 0 0 1 10 17c0-3.87 3.13-7 7-7"></svg:path><svg:path fill="currentColor" d="M17 12c-2.76 0-5 2.24-5 5s2.24 5 5 5s5-2.24 5-5s-2.24-5-5-5m3 5.5h-2.5V20h-1v-2.5H14v-1h2.5V14h1v2.5H20z"></svg:path>`,
})
export class IcSharpAddModeratorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
