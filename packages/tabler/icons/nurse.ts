import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerNurseIcon],svg[tabler-nurse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5c2.941 0 6.685 1.537 9 3l-2 11H5L3 8c2.394-1.513 6.168-3.005 9-3m-2 7h4m-2-2v4"></svg:path>`,
})
export class TablerNurseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
