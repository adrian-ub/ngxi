import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqSettingsAlt4Icon],svg[marketeq-settings-alt-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#306CFE" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M42.708 42.708a4.167 4.167 0 0 1-5.895 0L25.958 31.854A13.73 13.73 0 0 1 16.667 33A13.54 13.54 0 0 1 6.25 21a13.4 13.4 0 0 1 1.354-7.23l9.063 9.147l5.208-1.042l1.042-5.208l-9.146-9A13.4 13.4 0 0 1 21 6.25a13.54 13.54 0 0 1 12 10.417a13.73 13.73 0 0 1-1.146 9.208l10.854 10.854a4.17 4.17 0 0 1 0 5.98"></svg:path>`,
})
export class MarketeqSettingsAlt4Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
