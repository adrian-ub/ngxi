import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laRedRiverIcon],svg[la-red-river-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v22h22V5zm2 2h18v18H7zm5 4a1 1 0 0 0-1 1v6a2 2 0 0 0 2-2v-2a1 1 0 0 1 1-1h2a2 2 0 0 0 2-2zm4 4a1 1 0 0 0-1 1v6a2 2 0 0 0 2-2v-2a1 1 0 0 1 1-1h2a2 2 0 0 0 2-2z"></svg:path>`,
})
export class LaRedRiverIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
