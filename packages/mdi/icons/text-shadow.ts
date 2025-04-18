import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTextShadowIcon],svg[mdi-text-shadow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h13v3h-5v12H8V6H3zm9 4h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm-6 3h2v2h-2zm0 3h2v2h-2zm0 3h2v2h-2zm0 3h2v2h-2z"></svg:path>`,
})
export class MdiTextShadowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
