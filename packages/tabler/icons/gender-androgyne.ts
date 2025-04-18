import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerGenderAndrogyneIcon],svg[tabler-gender-androgyne-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m13 11l6-6M4 15a5 5 0 1 0 10 0a5 5 0 1 0-10 0m15-6V5h-4m1.5 5.5l-3-3"></svg:path>`,
})
export class TablerGenderAndrogyneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
