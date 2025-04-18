import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsStationeryIcon],svg[hugeicons-stationery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M21 17.4c0 1.697 0 2.546-.65 3.073c-.652.527-1.7.527-3.794.527h-1.112c-2.095 0-3.142 0-3.793-.527S11 19.097 11 17.4V6.6c0-1.697 0-2.546.65-3.073C12.303 3 13.35 3 15.445 3h1.112c2.095 0 3.142 0 3.793.527S21 4.903 21 6.6zM3 5.041c0-.962 0-1.443.293-1.742S4.057 3 5 3s1.414 0 1.707.299S7 4.079 7 5.04v10.847c0 .907 0 1.36-.076 1.8a5.2 5.2 0 0 1-.346 1.167c-.176.408-.422.785-.915 1.54c-.22.337-.33.505-.468.565a.5.5 0 0 1-.39 0c-.138-.06-.248-.228-.468-.565c-.493-.755-.74-1.132-.915-1.54a5.2 5.2 0 0 1-.346-1.167C3 17.248 3 16.795 3 15.888zM11.5 16.5h2m-2-4.5h2m-2-4.5h2"></svg:path><svg:path d="M7 7c0 .552-.895 1-2 1s-2-.448-2-1"></svg:path></svg:g>`,
})
export class HugeiconsStationeryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
