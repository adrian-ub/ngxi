import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMicrowaveIcon],svg[hugeicons-microwave-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2 15V7c0-1.886 0-2.828.586-3.414S4.114 3 6 3h12c1.886 0 2.828 0 3.414.586S22 5.114 22 7v8c0 1.886 0 2.828-.586 3.414S19.886 19 18 19H6c-1.886 0-2.828 0-3.414-.586S2 16.886 2 15m17-8.991V6m0 3.004v-.008M19 12v-.009"></svg:path><svg:path d="M5 14V8c0-.943 0-1.414.293-1.707S6.057 6 7 6h7c.943 0 1.414 0 1.707.293S16 7.057 16 8v6c0 .943 0 1.414-.293 1.707S14.943 16 14 16H7c-.943 0-1.414 0-1.707-.293S5 14.943 5 14m0 5v2m14-2v2"></svg:path></svg:g>`,
})
export class HugeiconsMicrowaveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
