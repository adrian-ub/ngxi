import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsSaveLineIcon],svg[majesticons-save-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 4H4v16h16V8l-4-4h-2M8 4v4h6V4M8 4h6m-2 8c-.667 0-2 .4-2 2s1.333 2 2 2s2-.4 2-2s-1.333-2-2-2"></svg:path>`,
})
export class MajesticonsSaveLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
