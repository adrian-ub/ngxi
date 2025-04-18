import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonForkNodeIcon],svg[carbon-fork-node-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 21h4v2h-4zm0-12h4v2h-4zm-2 2V9h-4V4h-6v24h6v-5h4v-2h-4V11zm-13.828 4H2v2h8.172l-2.586 2.586L9 21l5-5l-5-5l-1.414 1.414z"></svg:path>`,
})
export class CarbonForkNodeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
