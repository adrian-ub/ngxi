import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsKiteIcon],svg[hugeicons-kite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 2C7.714 4.407 4 8 2 14c3-2 7-3 10 0c3-3 7-2 10 0c-2-6-5.714-9.593-10-12m0 12c-1.609.733-4.304 1.819-3.977 4"></svg:path><svg:path d="M11.672 14c1.399 3.203-2.284 5.5.233 8M12 14c2 0 1.5 4.5 3 5m-3-5V2m-2 5c.291-.264.667-.477 1.013-.636c.366-.169.549-.253.987-.253s.621.084.987.253c.346.16.722.372 1.013.636"></svg:path></svg:g>`,
})
export class HugeiconsKiteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
