import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSearchDollarIcon],svg[hugeicons-search-dollar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M17.5 17.5L22 22m-2-11a9 9 0 1 0-18 0a9 9 0 0 0 18 0"></svg:path><svg:path d="M13.253 9.311c.105-1.264-1.83-2.297-3.308-1.604c-1.847.865-1.686 3.052.595 3.168c1.015.052 1.903-.058 2.506.596c.604.654.865 2.32-.913 2.884c-1.78.565-3.633-.443-3.633-1.672M10.971 6.5v.978m0 7.242v.78"></svg:path></svg:g>`,
})
export class HugeiconsSearchDollarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
