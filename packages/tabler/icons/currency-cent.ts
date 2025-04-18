import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCurrencyCentIcon],svg[tabler-currency-cent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16.007 7.54A5.97 5.97 0 0 0 11.999 6a6 6 0 0 0-5.992 6c0 3.314 2.682 6 5.992 6a5.97 5.97 0 0 0 4-1.536M12 20v-2m0-12V4"></svg:path>`,
})
export class TablerCurrencyCentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
