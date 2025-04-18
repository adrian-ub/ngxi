import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiWrenchCheckIcon],svg[mdi-wrench-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 2c1.8.6 3 2.3 3 4.2c0 2-1.2 3.7-3 4.3v11c0 .3-.2.5-.5.5h-2c-.3 0-.5-.2-.5-.6v-11c-1.8-.6-3-2.3-3-4.2S4.2 2.6 6 2v3.7h3zm11.6 11l1.4 1.41L15.47 21L12 17.5l1.4-1.41l2.07 2.08z"></svg:path>`,
})
export class MdiWrenchCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
