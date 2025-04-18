import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonExpressionlessFaceDuotoneIcon],svg[iconamoon-expressionless-face-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="9" fill="currentColor" opacity=".16"></svg:circle><svg:circle cx="12" cy="12" r="9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9 15h6"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16.5 9.5H14m-4 0H7.5"></svg:path></svg:g>`,
})
export class IconamoonExpressionlessFaceDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
