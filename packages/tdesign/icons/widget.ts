import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignWidgetIcon],svg[tdesign-widget-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.35 3h13.3L23 12.788V22H1v-9.212zm1.3 2l-3.111 7H20.46l-3.11-7zM21 14H3v6h18zM5 16h2.004v2.004H5zm4 0h2.004v2.004H9z"></svg:path>`,
})
export class TdesignWidgetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
