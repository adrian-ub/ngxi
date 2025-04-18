import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPanelLeftHeader28RegularIcon],svg[fluent-panel-left-header-28-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.004 7.75A3.75 3.75 0 0 1 5.754 4H22.25A3.75 3.75 0 0 1 26 7.75v11.5A3.75 3.75 0 0 1 22.25 23H5.755a3.75 3.75 0 0 1-3.75-3.75zm3.75-2.25a2.25 2.25 0 0 0-2.25 2.25v11.5a2.25 2.25 0 0 0 2.25 2.25H9v-16zm4.746 6v10h11.75a2.25 2.25 0 0 0 2.25-2.25V11.5zm14-1.5V7.75a2.25 2.25 0 0 0-2.25-2.25H10.5V10z"></svg:path>`,
})
export class FluentPanelLeftHeader28RegularIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
