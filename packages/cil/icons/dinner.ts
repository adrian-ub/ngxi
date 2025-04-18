import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilDinnerIcon],svg[cil-dinner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M464 344.063c0-109.308-84.755-199.193-192-207.39V80h-32v56.673c-107.245 8.2-192 98.082-192 207.39v33.107h416Zm-32 1.107H80v-1.107c0-97.046 78.953-176 176-176s176 78.953 176 176ZM16 416h480v32H16z"></svg:path>`,
})
export class CilDinnerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
