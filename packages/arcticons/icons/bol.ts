import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBolIcon],svg[arcticons-bol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:rect width="6.025" height="7.984" x="21.512" y="21.793" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="3.013" ry="3.013"></svg:rect><svg:circle cx="34.178" cy="29.525" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.02 17.725V28.27c0 .832.674 1.506 1.506 1.506h.451m-18.905-4.971a3.013 3.013 0 0 1 3.012-3.013h0a3.013 3.013 0 0 1 3.013 3.013v1.958a3.013 3.013 0 0 1-3.013 3.013h0a3.013 3.013 0 0 1-3.013-3.013m.001 3.013V17.725"></svg:path>`,
})
export class ArcticonsBolIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
