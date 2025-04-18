import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laBorderStyleIcon],svg[la-border-style-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v22h4v-2H7V7h18v2h2V5zm20 6v4h2v-4zm0 6v4h2v-4zm0 6v2h-2v2h4v-4zm-14 2v2h4v-2zm6 0v2h4v-2z"></svg:path>`,
})
export class LaBorderStyleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
