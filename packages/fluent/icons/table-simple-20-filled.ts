import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTableSimple20FilledIcon],svg[fluent-table-simple-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 3A2.5 2.5 0 0 0 3 5.5v4h6.5V3zm4 7.5H3v4A2.5 2.5 0 0 0 5.5 17h4zm1 0H17v4a2.5 2.5 0 0 1-2.5 2.5h-4zm6.5-1v-4A2.5 2.5 0 0 0 14.5 3h-4v6.5z"></svg:path>`,
})
export class FluentTableSimple20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
