import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdMenuToCloseAltTransitionIcon],svg[line-md-menu-to-close-alt-transition-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M5 12H19"><svg:animate fill="freeze" attributeName="d" dur="0.4s" values="M5 12H19;M12 12H12"></svg:animate><svg:set fill="freeze" attributeName="opacity" begin="0.4s" to="0"></svg:set></svg:path><svg:path d="M5 5L19 5M5 19L19 19" opacity="0"><svg:animate fill="freeze" attributeName="d" begin="0.2s" dur="0.4s" values="M5 5L19 5M5 19L19 19;M5 5L19 19M5 19L19 5"></svg:animate><svg:set fill="freeze" attributeName="opacity" begin="0.2s" to="1"></svg:set></svg:path></svg:g>`,
})
export class LineMdMenuToCloseAltTransitionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
