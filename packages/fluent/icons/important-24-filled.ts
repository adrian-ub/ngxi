import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentImportant24FilledIcon],svg[fluent-important-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2.002a3.875 3.875 0 0 0-3.875 3.875c0 2.92 1.207 6.552 1.813 8.199a2.19 2.19 0 0 0 2.064 1.423c.904 0 1.739-.542 2.063-1.418c.606-1.64 1.81-5.254 1.81-8.204A3.875 3.875 0 0 0 12 2.002M12.001 17a2.501 2.501 0 1 0 0 5.002a2.501 2.501 0 0 0 0-5.002"></svg:path>`,
})
export class FluentImportant24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
