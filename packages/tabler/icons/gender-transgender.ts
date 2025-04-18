import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerGenderTransgenderIcon],svg[tabler-gender-transgender-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12a4 4 0 1 0 8 0a4 4 0 1 0-8 0m7-3l6-6m0 4V3h-4M9 9L3 3m0 4V3h4M5.5 8.5l3-3M12 16v5m-2.5-2h5"></svg:path>`,
})
export class TablerGenderTransgenderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
