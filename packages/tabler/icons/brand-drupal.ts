import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandDrupalIcon],svg[tabler-brand-drupal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 2c0 4.308-7 6-7 12a7 7 0 0 0 14 0c0-6-7-7.697-7-12"></svg:path><svg:path d="M12 11.33a66 66 0 0 1-2.012 2.023C8.988 14.31 8 15.32 8 17c0 2.17 1.79 4 4 4s4-1.827 4-4c0-1.676-.989-2.685-1.983-3.642q-.63-.606-5.517-5.858z"></svg:path></svg:g>`,
})
export class TablerBrandDrupalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
