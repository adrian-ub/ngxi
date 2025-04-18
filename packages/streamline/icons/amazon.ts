import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineAmazonIcon],svg[streamline-amazon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M8.469 6.777c0 1.046-1.06 1.893-2.367 1.893c-1.308 0-2.368-.847-2.368-1.893s1.06-1.894 2.368-1.894h2.367"></svg:path><svg:path d="M3.734 2.988c0-1.046 1.06-1.894 2.368-1.894s2.367.848 2.367 1.894v4.018c.082.403.42 1.25 1.11 1.415M.84 10.061c1.135 1.03 3.57 1.996 6.6 1.848s5.179-1.338 5.874-1.914"></svg:path><svg:path d="M10.545 9.495c1.178-.423 2.78.33 2.78.33s-.08 1.769-1.005 2.613"></svg:path></svg:g>`,
})
export class StreamlineAmazonIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
