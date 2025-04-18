import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBriefcaseOffIcon],svg[mdi-briefcase-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22.11 21.46l-1.27 1.27L19.11 21H4a2 2 0 0 1-2-2V8c0-1.11.89-2 2-2h.11l-3-3l1.28-1.27zM22 18.8L8 4.8V4c0-1.11.89-2 2-2h4a2 2 0 0 1 2 2v2h4a2 2 0 0 1 2 2zM14 4h-4v2h4z"></svg:path>`,
})
export class MdiBriefcaseOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
