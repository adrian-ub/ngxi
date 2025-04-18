import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riGovernmentFillIcon],svg[ri-government-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 19V8H1V6h3V4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2h3v2h-1v11h1v2H1v-2zm11 0v-7h-2v7zm-5 0v-7H6v7zm10 0v-7h-2v7zM6 5v1h12V5z"></svg:path>`,
})
export class RiGovernmentFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
