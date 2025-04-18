import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonBorderLeftIcon],svg[carbon-border-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 29V3h2v26zm4 0v-2h2v2zm4 0v-2h2v2zm4 0v-2h2v2zm4 0v-2h2v2zm4 0v-2h2v2zm4 0v-2h2v2zm0-4v-2h2v2zm0-4v-2h2v2zm0-4v-2h2v2zm0-8V7h2v2zm0 4v-2h2v2zM7 5V3h2v2zm4 0V3h2v2zm4 0V3h2v2zm4 0V3h2v2zm4 0V3h2v2zm4 0V3h2v2zM8 10h10v2H8zm0 5h6v2H8z"></svg:path>`,
})
export class CarbonBorderLeftIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
