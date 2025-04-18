import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laStreamIcon],svg[la-stream-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v6h19V5zm2 2h15v2H7zm2 6v6h19v-6zm2 2h15v2H11zm-6 6v6h19v-6zm2 2h15v2H7z"></svg:path>`,
})
export class LaStreamIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
