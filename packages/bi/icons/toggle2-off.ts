import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[biToggle2OffIcon],svg[bi-toggle2-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M9 11c.628-.836 1-1.874 1-3a4.98 4.98 0 0 0-1-3h4a3 3 0 1 1 0 6z"></svg:path><svg:path d="M5 12a4 4 0 1 1 0-8a4 4 0 0 1 0 8m0 1A5 5 0 1 0 5 3a5 5 0 0 0 0 10"></svg:path></svg:g>`,
})
export class BiToggle2OffIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
