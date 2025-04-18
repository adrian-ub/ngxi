import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineTelegramSolidIcon],svg[streamline-telegram-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M.25 7a6.75 6.75 0 1 1 13.5 0A6.75 6.75 0 0 1 .25 7m9.002 4.064l1.045-7.932l-8.165 3.935l2.417.876l2.686-2.076a.5.5 0 1 1 .611.792L5.618 8.38v2.726l1.685-1.604z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineTelegramSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
