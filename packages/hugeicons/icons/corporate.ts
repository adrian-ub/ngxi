import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCorporateIcon],svg[hugeicons-corporate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 22V6c0-1.886 0-2.828-.586-3.414S9.886 2 8 2H6c-1.886 0-2.828 0-3.414.586S2 4.114 2 6v12c0 1.886 0 2.828.586 3.414S4.114 22 6 22zm0 0h6c1.886 0 2.828 0 3.414-.586S22 19.886 22 18v-6c0-1.886 0-2.828-.586-3.414S19.886 8 18 8h-6m6.5 8h-3m3-4h-3m-7 2h-3m3-4h-3m3-4h-3" color="currentColor"></svg:path>`,
})
export class HugeiconsCorporateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
