import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsChieldFillIcon],svg[lets-icons-chield-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.182 3.506l5.212 2.234a1 1 0 0 1 .606.92v5.252a6 6 0 0 1-2.513 4.883l-3.324 2.375a2 2 0 0 1-2.325 0l-3.325-2.375A6 6 0 0 1 5 11.912V6.66a1 1 0 0 1 .606-.919l5.212-2.234a3 3 0 0 1 2.364 0"></svg:path>`,
})
export class LetsIconsChieldFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
