import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineTelegramIcon],svg[streamline-telegram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.75 7a6.25 6.25 0 1 0 12.5 0A6.25 6.25 0 1 0 .75 7"></svg:path><svg:path d="m9.742 3.811l-.525 6.822l-2.882-2.958L2.92 6.96z"></svg:path><svg:path d="m5.063 7.406l.513 2.962l1.877-1.556M6.332 7.66l1.094-.875"></svg:path></svg:g>`,
})
export class StreamlineTelegramIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
