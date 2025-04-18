import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxVideoOffIcon],svg[bx-video-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 7c0-1.103-.897-2-2-2H6.414L3.707 2.293L2.293 3.707l18 18l1.414-1.414L18 16.586v-2.919L22 17V7l-4 3.333zm-2 7.586L8.414 7H16zM4 19h10.879l-2-2H4V8.121L2.145 6.265A2 2 0 0 0 2 7v10c0 1.103.897 2 2 2"></svg:path>`,
})
export class BxVideoOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
