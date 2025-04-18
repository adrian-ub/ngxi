import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerGenderGenderfluidIcon],svg[tabler-gender-genderfluid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 15.464a4 4 0 1 0 4-6.928a4 4 0 0 0-4 6.928M15.464 14l3-5.196M5.536 15.195l3-5.196M12 12h.01M9 9L3 3m2.5 5.5l3-3M21 21l-6-6m2 5l3-3M3 7V3h4"></svg:path>`,
})
export class TablerGenderGenderfluidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
