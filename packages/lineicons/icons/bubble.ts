import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsBubbleIcon],svg[lineicons-bubble-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.9 56.1c-.6 0-1.2-.1-1.8-.4c-1.5-.7-2.4-2.1-2.4-3.8V14.2c0-3.4 2.8-6.3 6.3-6.3h48c3.4 0 6.3 2.8 6.3 6.3v27.6c0 3.4-2.8 6.3-6.3 6.3H17.1l-8.5 7c-.8.6-1.7 1-2.7 1M8 12.4c-1 0-1.8.8-1.8 1.8v37l8.6-7.1c.4-.3.9-.5 1.4-.5H56c1 0 1.8-.8 1.8-1.8V14.2c0-1-.8-1.8-1.8-1.8z"></svg:path>`,
})
export class LineiconsBubbleIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
