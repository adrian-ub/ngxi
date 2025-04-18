import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggVercelIcon],svg[gg-vercel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.992 17.023L11.981 6.977L6.008 17.023z"></svg:path>`,
})
export class GgVercelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
