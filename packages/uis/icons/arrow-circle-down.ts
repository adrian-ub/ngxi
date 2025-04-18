import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uisArrowCircleDownIcon],svg[uis-arrow-circle-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m3.7 10.7l-3 3c-.1.1-.2.2-.3.2c-.2.1-.5.1-.8 0c-.1 0-.2-.1-.3-.2l-3-3c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l1.3 1.3V9c0-.6.4-1 1-1s1 .4 1 1v3.6l1.3-1.3c.4-.4 1-.4 1.4 0s.4 1 0 1.4"></svg:path>`,
})
export class UisArrowCircleDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
