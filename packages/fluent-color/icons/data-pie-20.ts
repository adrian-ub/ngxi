import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorDataPie20Icon],svg[fluent-color-data-pie-20-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorDataPie200)" d="M8.003 4.07C8.55 3.994 9 4.449 9 5v6h6c.552 0 1.008.45.93.997A7.001 7.001 0 0 1 2 11a7 7 0 0 1 6.003-6.93"></svg:path><svg:path fill="url(#fluentColorDataPie201)" d="M17.062 10c.498 0 .927-.366.937-.864L18 9a7 7 0 0 0-7.136-6.999c-.498.01-.864.44-.864.937V9a1 1 0 0 0 1 1z"></svg:path><svg:defs><svg:lineargradient id="fluentColorDataPie200" x1="15.938" x2="-6.363" y1="18" y2="-4.301" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#6D37CD"></svg:stop><svg:stop offset=".641" stop-color="#EA71EF"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorDataPie201" x1="17.333" x2="11.6" y1="8.533" y2="2" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#E23CB4"></svg:stop><svg:stop offset="1" stop-color="#EA71EF"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorDataPie20Icon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
