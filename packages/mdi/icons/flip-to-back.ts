import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFlipToBackIcon],svg[mdi-flip-to-back-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 17h2v-2h-2m0-10h2V3h-2M5 7H3v12a2 2 0 0 0 2 2h12v-2H5m14-2a2 2 0 0 0 2-2h-2m0-6h2V7h-2m0 6h2v-2h-2M9 17v-2H7a2 2 0 0 0 2 2m4-14h-2v2h2m6-2v2h2a2 2 0 0 0-2-2m-6 12h-2v2h2M9 3c-1.11 0-2 .89-2 2h2m0 6H7v2h2m0-6H7v2h2z"></svg:path>`,
})
export class MdiFlipToBackIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
