import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riGovernmentLineIcon],svg[ri-government-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 6h3v2h-1v11h1v2H1v-2h1V8H1V6h3V4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1zm0 2H4v11h3v-7h2v7h2v-7h2v7h2v-7h2v7h3zM6 5v1h12V5z"></svg:path>`,
})
export class RiGovernmentLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
