import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDesktopOff20RegularIcon],svg[fluent-desktop-off-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2.277 2.984l-.13-.13a.5.5 0 1 1 .707-.708l15 15a.5.5 0 0 1-.708.708L14.293 15H13v2h1.5a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1H7v-2H4a2 2 0 0 1-2-2V4c0-.37.101-.718.277-1.016M13.293 14L3.033 3.741Q3.002 3.866 3 4v9a1 1 0 0 0 1 1zM17 13a1 1 0 0 1-.885.993l.79.79A2 2 0 0 0 18 13V4a2 2 0 0 0-2-2H4.121l1 1H16a1 1 0 0 1 1 1zm-5 2H8v2h4z"></svg:path>`,
})
export class FluentDesktopOff20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
