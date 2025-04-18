import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilLayersAltIcon],svg[uil-layers-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 2H9a1 1 0 0 0-1 1v4H6a1 1 0 0 0-1 1v4H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-2h4a1 1 0 0 0 1-1v-2h4a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1M10 20H4v-6h6Zm5-3h-3v-4a1 1 0 0 0-1-1H7V9h8Zm5-3h-3V8a1 1 0 0 0-1-1h-6V4h10Z"></svg:path>`,
})
export class UilLayersAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
