import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsBookOpenLineIcon],svg[majesticons-book-open-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.603c1.667-1.271 5.5-2.86 9 0V19c-3.5-2.86-7.333-1.271-9 0m0-12.397c-1.667-1.271-5.5-2.86-9 0V19c3.5-2.86 7.333-1.271 9 0m0-12.397V19"></svg:path>`,
})
export class MajesticonsBookOpenLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
