import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonSlmIcon],svg[carbon-slm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m28 9l-1.5 5l-.5 2l-.5-2L24 9h-2v14h2v-8l-.2-2l.6 2l1.6 4.6l1.6-4.6l.6-2l-.2 2v8h2V9zM14 21V9h-2v14h8v-2zm-6 2H2v-2h6v-4H4c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h6v2H4v4h4c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2"></svg:path>`,
})
export class CarbonSlmIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
