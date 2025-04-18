import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerFlask2OffIcon],svg[tabler-flask-2-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.1 15H15m2.742 2.741A6 6 0 0 1 15.318 21H8.683A6 6 0 0 1 10 10.34v-.326M10 6V3h4v7m.613.598a6 6 0 0 1 2.801 2.817M9 3h6M3 3l18 18"></svg:path>`,
})
export class TablerFlask2OffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
