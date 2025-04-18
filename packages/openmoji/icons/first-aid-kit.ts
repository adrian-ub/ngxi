import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFirstAidKitIcon],svg[openmoji-first-aid-kit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#9B9B9A" d="M45.5 25.1h-3.75c0-3.18-2.57-5.75-5.75-5.75s-5.75 2.57-5.75 5.75H26.5c0-5.25 4.25-9.5 9.5-9.5s9.5 4.25 9.5 9.5"></svg:path><svg:path fill="#D0CFCE" d="M10.83 25.1H61V56H10.83z"></svg:path><svg:path fill="#EA5A47" d="M38.919 36.76h4.875v6.584h-4.875l.042-.042v4.875h-6.583v-4.876"></svg:path><svg:path fill="#EA5A47" d="M32.336 43.344h-4.792V36.76h4.792l.042-.041v-4.792h6.583v4.792"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:path d="M45.5 25.1h-3.75c0-3.18-2.57-5.75-5.75-5.75s-5.75 2.57-5.75 5.75H26.5c0-5.25 4.25-9.5 9.5-9.5s9.5 4.25 9.5 9.5"></svg:path><svg:path d="M30.25 25.1c0-3.18 2.57-5.75 5.75-5.75s5.75 2.57 5.75 5.75m-30.92 0H61V56H10.83z"></svg:path><svg:path d="M38.919 36.76h4.875v6.584h-4.875l.042-.042v4.875h-6.583v-4.876"></svg:path><svg:path d="M32.336 43.344h-4.792V36.76h4.792l.042-.041v-4.792h6.583v4.792"></svg:path></svg:g>`,
})
export class OpenmojiFirstAidKitIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
