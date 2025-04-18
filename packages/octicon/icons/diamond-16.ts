import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconDiamond16Icon],svg[octicon-diamond-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.527 9.237a1.75 1.75 0 0 1 0-2.474L6.777.512a1.75 1.75 0 0 1 2.475 0l6.251 6.25a1.75 1.75 0 0 1 0 2.475l-6.25 6.251a1.75 1.75 0 0 1-2.475 0zm1.06-1.414a.25.25 0 0 0 0 .354l6.251 6.25a.25.25 0 0 0 .354 0l6.25-6.25a.25.25 0 0 0 0-.354l-6.25-6.25a.25.25 0 0 0-.354 0l-6.25 6.25Z"></svg:path>`,
})
export class OcticonDiamond16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
