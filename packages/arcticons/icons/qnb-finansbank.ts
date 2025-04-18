import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsQnbFinansbankIcon],svg[arcticons-qnb-finansbank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.666 5.165v14.822M12.239 8.56l11.427 11.427L35.093 8.56M23.666 5.165v14.822"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m12.239 8.56l11.427 11.427L35.093 8.56M23.666 5.165v14.822"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m12.239 8.56l11.427 11.427L35.093 8.56m7.072 15.106H27.343M38.77 12.239L27.343 23.666L38.77 35.093m-15.106 7.072V27.343M35.091 38.77L23.664 27.343L12.237 38.77M5.165 23.664h14.822M8.56 35.091l11.427-11.427L8.56 12.237"></svg:path>`,
})
export class ArcticonsQnbFinansbankIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
