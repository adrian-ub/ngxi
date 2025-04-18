import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circumCreditCard2Icon],svg[circum-credit-card-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.437 18.859H4.563a2.5 2.5 0 0 1-2.5-2.5V7.641a2.5 2.5 0 0 1 2.5-2.5h14.874a2.5 2.5 0 0 1 2.5 2.5v8.718a2.5 2.5 0 0 1-2.5 2.5M4.563 6.141a1.5 1.5 0 0 0-1.5 1.5v8.718a1.5 1.5 0 0 0 1.5 1.5h14.874a1.5 1.5 0 0 0 1.5-1.5V7.641a1.5 1.5 0 0 0-1.5-1.5Z"></svg:path><svg:path fill="currentColor" d="M8.063 14.247h-3a.5.5 0 1 1 0-1h3a.5.5 0 1 1 0 1m10.871.002h-6.5a.5.5 0 0 1 0-1h6.5a.5.5 0 0 1 0 1"></svg:path><svg:rect width="2" height="4" x="16.434" y="7.14" fill="currentColor" rx=".5" transform="rotate(-90 17.434 9.14)"></svg:rect>`,
})
export class CircumCreditCard2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
