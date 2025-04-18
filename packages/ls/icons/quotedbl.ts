import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsQuotedblIcon],svg[ls-quotedbl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0h95v113L39 231L3 213L52 95H0zm167 0h95v113l-56 118l-37-18l50-118h-52z"></svg:path>`,
})
export class LsQuotedblIcon {
  readonly viewBox = input("0 0 262 723")
  readonly width = input("0.37em")
  readonly height = input("1em")
}
