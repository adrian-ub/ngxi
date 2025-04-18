import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignWidgetFilledIcon],svg[tdesign-widget-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.876 3h-13.3l-4.35 9.788V22h22v-9.212zm-15.11 9l3.11-7h10.7l3.112 7zm3.464 4v2.004H5.226V16zm4 0v2.004H9.226V16z"></svg:path>`,
})
export class TdesignWidgetFilledIcon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}
