import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconMapVerticalFilledIcon],svg[codicon-map-vertical-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 2H13l-2.187 3.5h-7.5zm7.188 7.5h-7.5l-1.875-3h7.5zm0 1h-7.5L3 14h7.5z"></svg:path>`,
})
export class CodiconMapVerticalFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
