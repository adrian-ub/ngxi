import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riNumber1Icon],svg[ri-number-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 1.5V22h-2V3.704L7.5 4.91V2.839l5-1.339z"></svg:path>`,
})
export class RiNumber1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
