import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggEditMarkupIcon],svg[gg-edit-markup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0S0 5.373 0 12s5.373 12 12 12m6.58-4.469A9.98 9.98 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12a9.98 9.98 0 0 0 3.333 7.453L7 10.973h2.17l2.83-4.9l2.83 4.9H17zm-2.488 1.596l-.886-8.153H8.794l-.886 8.153A10 10 0 0 0 12 22a10 10 0 0 0 4.092-.873" clip-rule="evenodd"></svg:path>`,
})
export class GgEditMarkupIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
