import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riZzzFillIcon],svg[ri-zzz-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 11v2l-5.327 6H11v2H3v-2l5.326-6H3v-2zm10-8v2l-5.327 6H21v2h-8v-2l5.326-6H13V3z"></svg:path>`,
})
export class RiZzzFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
