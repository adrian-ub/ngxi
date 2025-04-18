import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBuildingLighthouseIcon],svg[tabler-building-lighthouse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 3l2 3l2 15H8l2-15zM8 9h8M3 11l2-2l-2-2m18 4l-2-2l2-2"></svg:path>`,
})
export class TablerBuildingLighthouseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
