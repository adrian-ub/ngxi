import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPanelRightGallery28FilledIcon],svg[fluent-panel-right-gallery-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25.997 7.75A3.75 3.75 0 0 0 22.247 4H5.75A3.75 3.75 0 0 0 2 7.75v11.5A3.75 3.75 0 0 0 5.75 23h16.497a3.75 3.75 0 0 0 3.75-3.75V17.5H18v4H5.75a2.25 2.25 0 0 1-2.25-2.25V7.75A2.25 2.25 0 0 1 5.75 5.5H18v4h7.997zM18 16h7.997v-5H18z"></svg:path>`,
})
export class FluentPanelRightGallery28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
