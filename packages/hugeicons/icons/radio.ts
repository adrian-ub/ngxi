import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRadioIcon],svg[hugeicons-radio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="14.5" cy="13.5" r="3.5"></svg:circle><svg:path d="M2 13.5c0-3.759 0-5.638 1.053-6.893a4.5 4.5 0 0 1 .554-.554C4.862 5 6.741 5 10.5 5h3c3.759 0 5.638 0 6.892 1.053q.302.253.555.554C22 7.862 22 9.741 22 13.5s0 5.638-1.053 6.892a4.5 4.5 0 0 1-.555.555C19.138 22 17.26 22 13.5 22h-3c-3.759 0-5.638 0-6.893-1.053a4.5 4.5 0 0 1-.554-.555C2 19.138 2 17.26 2 13.5M10 5l4-3M6 12h1m-1 3h1"></svg:path></svg:g>`,
})
export class HugeiconsRadioIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
