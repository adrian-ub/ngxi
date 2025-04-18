import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPhoneHeaderArrowUp20FilledIcon],svg[fluent-phone-header-arrow-up-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m5.354 3.646a.5.5 0 0 1-.708.708L10.5 7.707V10.5a.5.5 0 0 1-1 0V7.707L8.354 8.854a.5.5 0 1 1-.708-.708l2-2A.5.5 0 0 1 9.997 6h.006a.5.5 0 0 1 .348.144l.003.003z"></svg:path>`,
})
export class FluentPhoneHeaderArrowUp20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
