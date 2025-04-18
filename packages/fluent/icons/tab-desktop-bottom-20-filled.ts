import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTabDesktopBottom20FilledIcon],svg[fluent-tab-desktop-bottom-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.503 17a2.5 2.5 0 0 0 2.5-2.5v-9a2.5 2.5 0 0 0-2.5-2.5h-9a2.5 2.5 0 0 0-2.5 2.5V13h7.5a1.5 1.5 0 0 1 1.5 1.5V17zm-3.5 0v-2.5a.5.5 0 0 0-.5-.5h-7.5v.5a2.5 2.5 0 0 0 2.5 2.5z"></svg:path>`,
})
export class FluentTabDesktopBottom20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
