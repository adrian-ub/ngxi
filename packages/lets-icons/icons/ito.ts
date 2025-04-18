import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsItoIcon],svg[lets-icons-ito-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M6 7a1 1 0 0 1 1-1h8a3 3 0 0 1 3 3v8a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm3-1V2m0 20v-4m6 4v-4m7-3h-4M6 15H2m4-6H2m13-6a6 6 0 0 1 6 6"></svg:path>`,
})
export class LetsIconsItoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
