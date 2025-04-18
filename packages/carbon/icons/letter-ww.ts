import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonLetterWwIcon],svg[carbon-letter-ww-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m24.3 13l-.91 8.61L22 13h-2l-1.39 8.61L17.7 13H16l1.36 10h2.28L21 14.63L22.36 23h2.28L26 13zM12.21 9l-.34 8l-.26 4.54L11.2 18l-.68-5.46H8.5L7.82 18l-.41 3.54L7.16 17l-.35-8h-1.8l1 14h2.27l.76-4.93L9.5 14l.01-.03l.01.03l.46 4.07l.76 4.93h2.27l1-14z"></svg:path>`,
})
export class CarbonLetterWwIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
