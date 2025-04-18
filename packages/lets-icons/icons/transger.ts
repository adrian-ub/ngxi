import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsTransgerIcon],svg[lets-icons-transger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path d="M13 17H9v2.589a.2.2 0 0 1-.324.157L2 14.5l6.676-5.246A.2.2 0 0 1 9 9.411V12h6"></svg:path><svg:path d="M11 7h4V4.411a.2.2 0 0 1 .324-.157L22 9.5l-6.676 5.246a.2.2 0 0 1-.324-.158V12H9"></svg:path></svg:g>`,
})
export class LetsIconsTransgerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
