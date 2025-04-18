import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBuildingBurjAlArabIcon],svg[tabler-building-burj-al-arab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21h18M7 21V3m0 1c5.675.908 10 5.613 10 11.28A11 11 0 0 1 15.395 21M5 9h12M7 13h4m-4 4h4"></svg:path>`,
})
export class TablerBuildingBurjAlArabIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
