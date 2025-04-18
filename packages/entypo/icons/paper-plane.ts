import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[entypoPaperPlaneIcon],svg[entypo-paper-plane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.64 2.634L.984 8.856c-.284.1-.347.345-.01.479l3.796 1.521l2.25.901l10.984-8.066c.148-.108.318.095.211.211l-7.871 8.513v.002l-.452.503l.599.322l4.982 2.682c.291.156.668.027.752-.334l2.906-12.525c.079-.343-.148-.552-.491-.431M7 17.162c0 .246.139.315.331.141c.251-.229 2.85-2.561 2.85-2.561L7 13.098z"></svg:path>`,
})
export class EntypoPaperPlaneIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
