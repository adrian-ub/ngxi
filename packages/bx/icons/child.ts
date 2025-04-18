import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxChildIcon],svg[bx-child-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="6" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M14 9h-4a1 1 0 0 0-.8.4l-3 4l1.6 1.2L9 13v7h2v-4h2v4h2v-7l1.2 1.6l1.6-1.2l-3-4A1 1 0 0 0 14 9"></svg:path>`,
})
export class BxChildIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
