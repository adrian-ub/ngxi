import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiClickIcon],svg[mynaui-click-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.92 6.956L5.45 5.473m9.309 1.483l1.47-1.483m-10.78 10.88l1.47-1.484m3.92-9.89V3m-5.88 7.913H3m13.875 5.923l3.814-1.506a.496.496 0 0 0 0-.921l-9.165-3.615a.492.492 0 0 0-.635.64l3.582 9.251c.162.42.75.42.912 0z"></svg:path>`,
})
export class MynauiClickIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
