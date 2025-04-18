import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilUnderlineIcon],svg[cil-underline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 496h480V16H16ZM48 48h416v416H48Z"></svg:path><svg:path fill="currentColor" d="M296 152h32v88a63.966 63.966 0 0 1-88 59.313V152h24v-32H136v32h32v88a96 96 0 0 0 192 0v-88h32v-32h-96ZM136 368h256v32H136z"></svg:path>`,
})
export class CilUnderlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
