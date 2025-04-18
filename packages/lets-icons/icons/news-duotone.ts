import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsNewsDuotoneIcon],svg[lets-icons-news-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".25" d="M5 10c0-1.87 0-2.804.402-3.5A3 3 0 0 1 6.5 5.402C7.196 5 8.13 5 10 5h4c1.87 0 2.804 0 3.5.402A3 3 0 0 1 18.598 6.5C19 7.196 19 8.13 19 10z"></svg:path><svg:rect width="14" height="14" x="5" y="5" stroke="currentColor" stroke-width="1.2" rx="3"></svg:rect><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.2" d="M5 10h14"></svg:path></svg:g>`,
})
export class LetsIconsNewsDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
