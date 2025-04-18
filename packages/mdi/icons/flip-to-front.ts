import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFlipToFrontIcon],svg[mdi-flip-to-front-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 21h2v-2H7m4 2h2v-2h-2m8-4H9V5h10m0-2H9c-1.11 0-2 .89-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-4 18h2v-2h-2M3 9h2V7H3m2 14v-2H3a2 2 0 0 0 2 2m-2-4h2v-2H3m0-2h2v-2H3z"></svg:path>`,
})
export class MdiFlipToFrontIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
