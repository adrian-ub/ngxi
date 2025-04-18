import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignActivityIcon],svg[tdesign-activity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2H2v20h20zm-2 2v7h-2.554l-2.021 3.233l-5.865-7.82L5.546 11H4V4zM4 13h2.454L9.44 9.587l6.135 8.18L18.555 13H20v7H4z"></svg:path>`,
})
export class TdesignActivityIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
