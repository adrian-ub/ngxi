import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxSkipNextIcon],svg[bx-skip-next-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 7v10l7-5zm9 10V7h-2v10z"></svg:path>`,
})
export class BxSkipNextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
