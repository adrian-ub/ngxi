import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTabDesktopCopy20RegularIcon],svg[fluent-tab-desktop-copy-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 2A2.5 2.5 0 0 0 5 4.5v8A2.5 2.5 0 0 0 7.5 15h8a2.5 2.5 0 0 0 2.5-2.5v-8A2.5 2.5 0 0 0 15.5 2zM17 4.5V5h-6.5a.5.5 0 0 1-.5-.5V3h5.5A1.5 1.5 0 0 1 17 4.5m-8 0A1.5 1.5 0 0 0 10.5 6H17v6.5a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 6 12.5v-8A1.5 1.5 0 0 1 7.5 3H9zM12.5 18a2.5 2.5 0 0 0 2.45-2h-1.035a1.5 1.5 0 0 1-1.415 1H6a3 3 0 0 1-3-3V7.5a1.5 1.5 0 0 1 1-1.415V5.05A2.5 2.5 0 0 0 2 7.5V14a4 4 0 0 0 4 4z"></svg:path>`,
})
export class FluentTabDesktopCopy20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
