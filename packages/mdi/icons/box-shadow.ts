import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBoxShadowIcon],svg[mdi-box-shadow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h15v15H3zm16 16h2v2h-2zm0-3h2v2h-2zm0-3h2v2h-2zm0-3h2v2h-2zm0-3h2v2h-2zm-3 12h2v2h-2zm-3 0h2v2h-2zm-3 0h2v2h-2zm-3 0h2v2H7z"></svg:path>`,
})
export class MdiBoxShadowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
