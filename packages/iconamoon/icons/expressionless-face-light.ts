import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonExpressionlessFaceLightIcon],svg[iconamoon-expressionless-face-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:circle cx="12" cy="12" r="9" stroke-linejoin="round"></svg:circle><svg:path d="M9 15h6"></svg:path><svg:path stroke-linejoin="round" d="M16.5 9.5H14m-4 0H7.5"></svg:path></svg:g>`,
})
export class IconamoonExpressionlessFaceLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
