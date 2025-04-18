import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiHeartSuitIcon],svg[openmoji-heart-suit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#EA5A47" d="M60.7 26.2c0-7.2-5.9-13.1-13.1-13.1c-5 0-9.3 2.8-11.5 6.9c-2.2-4.1-6.6-6.9-11.5-6.9c-7.2 0-13.1 5.9-13.1 13.1c0 3.1 1.1 6 2.9 8.2l21.8 27l21.8-27c1.6-2.2 2.7-5 2.7-8.2"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M60.7 26.2c0-7.2-5.9-13.1-13.1-13.1c-5 0-9.3 2.8-11.5 6.9c-2.2-4.1-6.6-6.9-11.5-6.9c-7.2 0-13.1 5.9-13.1 13.1c0 3.1 1.1 6 2.9 8.2h0l21.8 27l21.8-27h0c1.6-2.2 2.7-5 2.7-8.2"></svg:path>`,
})
export class OpenmojiHeartSuitIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
