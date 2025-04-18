import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFileUnknownFilledIcon],svg[tdesign-file-unknown-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 1H3v22h10.846A6.5 6.5 0 0 1 21 12.232V9h-8z"></svg:path><svg:path fill="currentColor" d="M21 7v-.414L15.414 1H15v6zm-4.5 9.249c0-.593.57-1.249 1.5-1.249s1.5.656 1.5 1.249c0 .303-.132.599-.388.834L17 19.076v1.546h2v-.683l1.473-1.39c.62-.575 1.027-1.385 1.027-2.3C21.5 14.358 19.83 13 18 13s-3.5 1.358-3.5 3.249v1h2zm2.503 5.747h-2.004V24h2.004z"></svg:path>`,
})
export class TdesignFileUnknownFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
