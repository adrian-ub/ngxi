import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riHealthBookFillIcon],svg[ri-health-book-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-2H3v-2h2v-2H3v-2h2v-2H3V9h2V7H3V5h2V3a1 1 0 0 1 1-1zm-6 6h-2v3H9v2h2.999L12 16h2l-.001-3H17v-2h-3z"></svg:path>`,
})
export class RiHealthBookFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
