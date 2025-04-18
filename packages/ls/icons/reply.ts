import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsReplyIcon],svg[ls-reply-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 284l274 254V411s389-100 493 245c0 0 37-494-493-494V38z"></svg:path>`,
})
export class LsReplyIcon {
  readonly viewBox = input("0 0 768 656")
  readonly width = input("1.18em")
  readonly height = input("1em")
}
