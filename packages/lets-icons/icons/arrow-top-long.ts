import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsArrowTopLongIcon],svg[lets-icons-arrow-top-long-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 7v14"></svg:path><svg:path fill="currentColor" d="m11.797 2.285l-3.893 5.45A.8.8 0 0 0 8.554 9h6.891a.8.8 0 0 0 .651-1.265l-3.893-5.45a.25.25 0 0 0-.406 0"></svg:path></svg:g>`,
})
export class LetsIconsArrowTopLongIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
