import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riBookMarkedLineIcon],svg[ri-book-marked-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 18.5V5a3 3 0 0 1 3-3h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5A3.5 3.5 0 0 1 3 18.5M19 20v-3H6.5a1.5 1.5 0 0 0 0 3zM10 4H6a1 1 0 0 0-1 1v10.337A3.5 3.5 0 0 1 6.5 15H19V4h-2v8l-3.5-2l-3.5 2z"></svg:path>`,
})
export class RiBookMarkedLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
