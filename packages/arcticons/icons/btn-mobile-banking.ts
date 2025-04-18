import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBtnMobileBankingIcon],svg[arcticons-btn-mobile-banking-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 42.5h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.945 20.55a2.694 2.694 0 0 1 0 5.387H10.5V15.161h4.445a2.694 2.694 0 0 1 0 5.388m0 0H10.5m19.861 5.388V15.161L37.5 25.937V15.161m-17.153 0h7.139m-3.569 10.776V15.161M12.681 28.353H37.5l-27 4.486v-2.305c0-1.205.977-2.181 2.181-2.181"></svg:path>`,
})
export class ArcticonsBtnMobileBankingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
