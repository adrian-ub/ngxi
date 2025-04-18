import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatLotionBottleIcon],svg[fluent-emoji-flat-lotion-bottle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#F8312F" d="M14 6.5V4h4v2.5c.003.5.504.64.504.64L16 8.5l-2.505-1.358S14.001 7 14 6.5"></svg:path><svg:path fill="#FBB8AB" d="M7 15a8 8 0 0 1 8-8h2a8 8 0 0 1 8 8v11a4 4 0 0 1-4 4H11a4 4 0 0 1-4-4z"></svg:path><svg:path fill="#F3EEF8" d="M17 14s-1-2-2 0c0 0-3 4.5-3 7.5c0 1 .5 3.5 4 3.5s4-2.5 4-3.5c0-3-3-7.5-3-7.5"></svg:path><svg:path fill="#FF8687" d="M14 5c-2-1-1-3 1-3c1 0 6 1 6 1c1.5.5 1 2 0 2z"></svg:path></svg:g>`,
})
export class FluentEmojiFlatLotionBottleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
