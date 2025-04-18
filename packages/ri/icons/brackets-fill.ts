import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riBracketsFillIcon],svg[ri-brackets-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 3v2H6v14h3v2H4V3zm6 0h5v18h-5v-2h3V5h-3z"></svg:path>`,
})
export class RiBracketsFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
