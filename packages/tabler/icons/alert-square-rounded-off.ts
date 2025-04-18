import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerAlertSquareRoundedOffIcon],svg[tabler-alert-square-rounded-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.201 19.199C17.851 20.549 15.601 21 12 21c-7.2 0-9-1.8-9-9c0-3.598.45-5.847 1.797-7.197m2.626-1.376C8.627 3.12 10.132 3 12 3c7.2 0 9 1.8 9 9c0 1.865-.12 3.367-.425 4.57M12 7v1m0 8h.01M3 3l18 18"></svg:path>`,
})
export class TablerAlertSquareRoundedOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
