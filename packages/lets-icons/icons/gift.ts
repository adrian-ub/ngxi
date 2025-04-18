import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsGiftIcon],svg[lets-icons-gift-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path d="M3 10c0-.943 0-1.414.293-1.707S4.057 8 5 8h14c.943 0 1.414 0 1.707.293S21 9.057 21 10v1.5c0 .466 0 .699-.076.883a1 1 0 0 1-.541.54c-.184.077-.417.077-.883.077s-.699 0-.883.076a1 1 0 0 0-.54.541c-.077.184-.077.417-.077.883V18c0 .943 0 1.414-.293 1.707S16.943 20 16 20H8c-.943 0-1.414 0-1.707-.293S6 18.943 6 18v-3.5c0-.466 0-.699-.076-.883a1 1 0 0 0-.541-.54C5.199 13 4.966 13 4.5 13s-.699 0-.883-.076a1 1 0 0 1-.54-.541C3 12.199 3 11.966 3 11.5z"></svg:path><svg:path stroke-linecap="round" d="M5 13h14m-7-6v13m0-13l-.879-.879a9.7 9.7 0 0 0-3.796-2.346v0A1.766 1.766 0 0 0 5 5.45v.182c0 .817.523 1.542 1.297 1.8L8 8m4-1l.879-.879a9.7 9.7 0 0 1 3.796-2.346v0A1.766 1.766 0 0 1 19 5.45v.182c0 .817-.523 1.542-1.297 1.8L16 8"></svg:path></svg:g>`,
})
export class LetsIconsGiftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
