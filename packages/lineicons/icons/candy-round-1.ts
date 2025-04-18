import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsCandyRound1Icon],svg[lineicons-candy-round-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 5.25a6.75 6.75 0 0 1 6.24 4.172l2.583-1.789A.75.75 0 0 1 22 8.25v7.5a.75.75 0 0 1-1.177.617l-2.583-1.789a6.751 6.751 0 0 1-12.479 0l-2.584 1.789A.75.75 0 0 1 2 15.75v-7.5a.75.75 0 0 1 1.177-.617l2.584 1.79a6.75 6.75 0 0 1 6.24-4.173m0 1.5a5.25 5.25 0 1 0 .002 10.5a5.25 5.25 0 0 0-.001-10.5m6.75 6.357l1.75 1.212V9.68l-1.75 1.212zm-13.5 0v-2.214L3.5 9.681v4.638z"></svg:path>`,
})
export class LineiconsCandyRound1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
