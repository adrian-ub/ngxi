import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiSignalCircleSolidIcon],svg[mynaui-signal-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m7.5-1.5a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0zM12 8.25a.75.75 0 0 0-.75.75v6a.75.75 0 0 0 1.5 0V9a.75.75 0 0 0-.75-.75m3.75 2.25a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0z"></svg:path>`,
})
export class MynauiSignalCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
