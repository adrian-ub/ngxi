import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsMaskIcon],svg[lets-icons-mask-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 8h8a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2m-2 3l-.946-.315A1.56 1.56 0 0 0 3 12.165v0c0 .522.26 1.009.695 1.298L6 15m12-4l.946-.315A1.56 1.56 0 0 1 21 12.165v0a1.56 1.56 0 0 1-.695 1.298L18 15m-6-4v4m2-2h-4"></svg:path>`,
})
export class LetsIconsMaskIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
