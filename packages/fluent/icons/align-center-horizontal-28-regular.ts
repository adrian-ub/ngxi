import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentAlignCenterHorizontal28RegularIcon],svg[fluent-align-center-horizontal-28-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 13.75a.75.75 0 0 1-.75.75H23V18a2.75 2.75 0 0 1-2.75 2.75h-2.5A2.75 2.75 0 0 1 15 18v-3.5h-2v6.25a2.75 2.75 0 0 1-2.75 2.75h-2.5A2.75 2.75 0 0 1 5 20.75V14.5H2.75a.75.75 0 0 1 0-1.5H5V7.25A2.75 2.75 0 0 1 7.75 4.5h2.5A2.75 2.75 0 0 1 13 7.25V13h2v-3a2.75 2.75 0 0 1 2.75-2.75h2.5A2.75 2.75 0 0 1 23 10v3h2.25a.75.75 0 0 1 .75.75M21.5 10c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v8c0 .69.56 1.25 1.25 1.25h2.5c.69 0 1.25-.56 1.25-1.25zM10.25 6h-2.5c-.69 0-1.25.56-1.25 1.25v13.5c0 .69.56 1.25 1.25 1.25h2.5c.69 0 1.25-.56 1.25-1.25V7.25c0-.69-.56-1.25-1.25-1.25"></svg:path>`,
})
export class FluentAlignCenterHorizontal28RegularIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
