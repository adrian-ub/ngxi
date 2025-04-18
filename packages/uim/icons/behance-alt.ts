import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uimBehanceAltIcon],svg[uim-behance-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 20H2a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h5.5a4.5 4.5 0 0 1 0 9M3 18h4.5a2.5 2.5 0 0 0 0-5H3Z"></svg:path><svg:path fill="currentColor" d="M7 13H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5a4 4 0 0 1 0 8m-4-2h4a2 2 0 0 0 0-4H3zm17-4h-4a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2m2 7h-8a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2"></svg:path><svg:path fill="currentColor" d="M18 20a5.006 5.006 0 0 1-5-5v-2a5 5 0 1 1 10 0a1 1 0 0 1-2 0a3 3 0 0 0-6 0v2a2.998 2.998 0 0 0 5.9.754a1 1 0 0 1 1.94.492A4.985 4.985 0 0 1 18 20"></svg:path>`,
})
export class UimBehanceAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
