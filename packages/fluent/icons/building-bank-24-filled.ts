import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBuildingBank24FilledIcon],svg[fluent-building-bank-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.968 2.325a1.75 1.75 0 0 1 2.064 0l7.421 5.416c.977.712.474 2.257-.734 2.26H4.28c-1.208-.003-1.71-1.548-.734-2.26zM13 6.25a1 1 0 1 0-2 0a1 1 0 0 0 2 0M11.25 16h-2v-5h2zm3.5 0h-2v-5h2zm3.75 0h-2.25v-5h2.25zm.25 1H5.25A2.25 2.25 0 0 0 3 19.25v.5c0 .415.336.75.75.75h16.5a.75.75 0 0 0 .75-.75v-.5A2.25 2.25 0 0 0 18.75 17m-11-1H5.5v-5h2.25z"></svg:path>`,
})
export class FluentBuildingBank24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
