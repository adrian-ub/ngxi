import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEmojiRoundedSymbolForCaiIcon],svg[arcticons-emoji-rounded-symbol-for-cai-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.857 12.482h3.84V6.34h4.607v6.143h3.839M17.857 35.518h3.84v6.143h4.607v-6.143h3.839m0-11.518H41.66m-23.803 0H6.34"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.857 7.491V40.51A17.66 17.66 0 0 1 6.723 27.84h7.295v5.76a13.8 13.8 0 0 1-1.92-2.304"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.857 7.491a17.66 17.66 0 0 0-11.134 12.67h7.295V14.4a13.8 13.8 0 0 0-1.92 2.304m18.045-9.213V40.51a17.66 17.66 0 0 0 11.134-12.67h-7.295v5.76a13.8 13.8 0 0 0 1.92-2.304"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.143 7.491a17.66 17.66 0 0 1 11.134 12.67h-7.295V14.4a13.8 13.8 0 0 1 1.92 2.304"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.5 24c0 11.874 9.626 21.5 21.5 21.5S45.5 35.874 45.5 24S35.874 2.5 24 2.5S2.5 12.126 2.5 24"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.696 16.321h4.607V31.68h-4.607z"></svg:path>`,
})
export class ArcticonsEmojiRoundedSymbolForCaiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
