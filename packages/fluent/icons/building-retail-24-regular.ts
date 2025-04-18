import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBuildingRetail24RegularIcon],svg[fluent-building-retail-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.75 8a.75.75 0 0 0-.75.75v3.5c0 .414.336.75.75.75h10.5a.75.75 0 0 0 .75-.75v-3.5a.75.75 0 0 0-.75-.75zm.75 3.5v-2h9v2zm6.25 2.5a.75.75 0 0 0-.75.75v2.5c0 .414.336.75.75.75h3.5a.75.75 0 0 0 .75-.75v-2.5a.75.75 0 0 0-.75-.75zm.75 2.5v-1h2v1zM4 3a2 2 0 0 0-1 3.732V20.25c0 .414.336.75.75.75h16.5a.75.75 0 0 0 .75-.75V6.732A2 2 0 0 0 20 3zm15.5 4v12.5h-8v-4.75a.75.75 0 0 0-.75-.75h-4a.75.75 0 0 0-.75.75v4.75H4.5V7zm-16-2a.5.5 0 0 1 .5-.5h16a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.5-.5M10 19.5H7.5v-4H10z"></svg:path>`,
})
export class FluentBuildingRetail24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
