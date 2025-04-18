import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentAgents16RegularIcon],svg[fluent-agents-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.102 3a.5.5 0 0 0-.433.25l-2.598 4.5a.5.5 0 0 0 0 .5l2.504 4.337a.827.827 0 0 0 1.504-.165l2.89-9.146a1.826 1.826 0 0 1 3.322-.363l2.504 4.337a1.5 1.5 0 0 1 0 1.5l-2.598 4.5a1.5 1.5 0 0 1-1.299.75H8.502a.5.5 0 0 1 0-1h2.396a.5.5 0 0 0 .433-.25l2.598-4.5a.5.5 0 0 0 0-.5l-2.504-4.337a.826.826 0 0 0-1.503.164l-2.89 9.146a1.827 1.827 0 0 1-3.323.364L1.205 8.75a1.5 1.5 0 0 1 0-1.5l2.598-4.5A1.5 1.5 0 0 1 5.102 2h2.4a.5.5 0 0 1 0 1z"></svg:path>`,
})
export class FluentAgents16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
