import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMclarenIcon],svg[arcticons-mclaren-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 24.817C37.16 7.22 62.037 9.58 25.155 34.6c2.963-3.163 5.443-7.633 2.611-10.778c-2.322-3.185-13.1-3.138-23.266.996z"></svg:path>`,
})
export class ArcticonsMclarenIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
