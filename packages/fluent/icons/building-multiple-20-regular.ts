import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBuildingMultiple20RegularIcon],svg[fluent-building-multiple-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm10 13h2v-2h-2zm3 0h2V7a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v10h2v-2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1zM11 4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v13h5V7a2 2 0 0 1 2-2h1zm1 4.75a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m-6.75.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5M6 5.75a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m5.25 6.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5M6 14.75a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m-.75-2.25a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5M15.5 8.75a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m-.75 3.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5"></svg:path>`,
})
export class FluentBuildingMultiple20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
