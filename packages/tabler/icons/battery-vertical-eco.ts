import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBatteryVerticalEcoIcon],svg[tabler-battery-vertical-eco-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 18V7a2 2 0 0 1 2-2h.5c.276 0 .5-.224.5-.5s.224-.5.5-.5h3c.276 0 .5.224.5.5s.224.5.5.5h.5a2 2 0 0 1 2 2v1M9 20a2 2 0 0 1-2-2m6-.857C13 14.303 15.09 12 17.667 12H20v.857C20 15.697 17.91 18 15.333 18H13zM13 21v-3"></svg:path>`,
})
export class TablerBatteryVerticalEcoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
