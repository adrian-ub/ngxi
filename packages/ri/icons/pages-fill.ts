import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riPagesFillIcon],svg[ri-pages-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 22H4a1 1 0 0 1-1-1V8h18v13a1 1 0 0 1-1 1m1-16H3V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1zM7 11v4h4v-4zm0 6v2h10v-2zm6-5v2h4v-2z"></svg:path>`,
})
export class RiPagesFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
