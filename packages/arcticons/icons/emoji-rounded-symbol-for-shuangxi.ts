import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEmojiRoundedSymbolForShuangxiIcon],svg[arcticons-emoji-rounded-symbol-for-shuangxi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.304 24h15.203a17.7 17.7 0 0 0-.768-4.607H26.304zm-4.608 0H6.493c.05-1.563.309-3.112.768-4.607h14.436zM9.027 14.786h29.946M13.25 10.179h21.5M20.16 6.723v8.063m7.68-8.063v8.063M7.107 28.607h33.786M17.857 24v9.214M30.143 24v9.214m-8.447 0H9.026a17.66 17.66 0 0 0 12.67 8.293zm4.608 0h12.67a17.66 17.66 0 0 1-12.67 8.293z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.5 24c-.001 11.874 9.624 21.501 21.498 21.502s21.5-9.623 21.502-21.497V24c.001-11.874-9.624-21.501-21.498-21.502S2.502 12.12 2.5 23.996z"></svg:path>`,
})
export class ArcticonsEmojiRoundedSymbolForShuangxiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
