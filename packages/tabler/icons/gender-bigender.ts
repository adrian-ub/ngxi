import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerGenderBigenderIcon],svg[tabler-gender-bigender-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11a4 4 0 1 0 8 0a4 4 0 1 0-8 0m12-8l-5 5m1-5h4v4m-8 9v6m-3-3h6"></svg:path>`,
})
export class TablerGenderBigenderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
