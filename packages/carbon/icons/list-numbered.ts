import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonListNumberedIcon],svg[carbon-list-numbered-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 22h14v2H16zm0-14h14v2H16zm-8 4V4H6v1H4v2h2v5H4v2h6v-2zm2 16H4v-4a2 2 0 0 1 2-2h2v-2H4v-2h4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H6v2h4z"></svg:path>`,
})
export class CarbonListNumberedIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
