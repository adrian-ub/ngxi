import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerVaccineOffIcon],svg[tabler-vaccine-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m17 3l4 4m-2-2l-4.5 4.5m-3-3l6 6m-1-1l-.5.5m-2 2l-4 4H6v-4l4-4m2-2l.5-.5m-5 5L9 14m-6 7l3-3M3 3l18 18"></svg:path>`,
})
export class TablerVaccineOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
