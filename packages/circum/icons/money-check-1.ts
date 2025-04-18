import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circumMoneyCheck1Icon],svg[circum-money-check-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.437 18.218H4.563a2.5 2.5 0 0 1-2.5-2.5V8.282a2.5 2.5 0 0 1 2.5-2.5h14.874a2.5 2.5 0 0 1 2.5 2.5v7.436a2.5 2.5 0 0 1-2.5 2.5M4.563 6.782a1.5 1.5 0 0 0-1.5 1.5v7.436a1.5 1.5 0 0 0 1.5 1.5h14.874a1.5 1.5 0 0 0 1.5-1.5V8.282a1.5 1.5 0 0 0-1.5-1.5Z"></svg:path><svg:path fill="currentColor" d="M12 12.786H5.064a.5.5 0 0 1 0-1H12a.5.5 0 0 1 0 1m2 2.928H5.064a.5.5 0 1 1 0-1H14a.5.5 0 0 1 0 1"></svg:path><svg:rect width="4" height="2" x="15.436" y="8.283" fill="currentColor" rx=".5"></svg:rect>`,
})
export class CircumMoneyCheck1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
