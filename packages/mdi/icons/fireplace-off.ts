import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFireplaceOffIcon],svg[mdi-fireplace-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 22H2v-2h20zm0-16H2V3h20zm-2 1v12h-3v-8s-2.5-1-5-1s-5 1-5 1v8H4V7z"></svg:path>`,
})
export class MdiFireplaceOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
