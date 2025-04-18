import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonPortDefinitionIcon],svg[carbon-port-definition-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 7V3.6A1.6 1.6 0 0 0 17.4 2H4v2h13v3h-6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6v3H4v2h13.4a1.6 1.6 0 0 0 1.6-1.6V25h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zm6 16H11V9h14z"></svg:path>`,
})
export class CarbonPortDefinitionIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
