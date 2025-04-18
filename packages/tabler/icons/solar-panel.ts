import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerSolarPanelIcon],svg[tabler-solar-panel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.28 14h15.44a1 1 0 0 0 .97-1.243l-1.5-6A1 1 0 0 0 18.22 6H5.78a1 1 0 0 0-.97.757l-1.5 6A1 1 0 0 0 4.28 14M4 10h16M10 6l-1 8m5-8l1 8m-3 0v4m-5 0h10"></svg:path>`,
})
export class TablerSolarPanelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
