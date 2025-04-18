import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsChinaConstructionBankIcon],svg[arcticons-china-construction-bank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m23.997 8.251l12.498 12.294l-3.435 3.381h0l-8.11-7.981l-10.128 9.969l10.13 9.968l8.108-7.981h0l8.677.053h0A18.125 18.125 0 1 1 23.997 8.25m3.745-2.189l11.79 11.494l2.913-2.868l-7.634-7.763c-3.527-3.587-8.507-4.782-11.971-1.505c.373-.106 3.786-.446 4.902.642"></svg:path>`,
})
export class ArcticonsChinaConstructionBankIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
