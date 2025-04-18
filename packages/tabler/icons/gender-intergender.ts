import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerGenderIntergenderIcon],svg[tabler-gender-intergender-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.5 11.5L20 18v-4m-8.5-.5L18 20M9 4a5 5 0 1 1 0 10A5 5 0 0 1 9 4m5 16l2-2"></svg:path>`,
})
export class TablerGenderIntergenderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
