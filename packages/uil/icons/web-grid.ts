import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilWebGridIcon],svg[uil-web-grid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 2H3a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1m-7 18H4v-7h10Zm0-9H4V4h10Zm6 9h-4V4h4Z"></svg:path>`,
})
export class UilWebGridIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
