import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uisTableIcon],svg[uis-table-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 2H3c-.6 0-1 .4-1 1v18c0 .6.4 1 1 1h18c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1M10 20v-4h4v4zm0-6v-4h4v4zm-6-4h4v4H4zm6-2V4h4v4zm6 2h4v4h-4zm4-2h-4V4h4zM8 4v4H4V4zM4 16h4v4H4zm12 4v-4h4v4z"></svg:path>`,
})
export class UisTableIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
