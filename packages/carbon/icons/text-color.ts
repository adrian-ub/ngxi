import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonTextColorIcon],svg[carbon-text-color-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 21h2L17 4h-2L8 21h2l1.61-4h8.74zm-9.57-6l3.44-8.37h.26L19.54 15zM6 24h20v4H6z"></svg:path>`,
})
export class CarbonTextColorIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
