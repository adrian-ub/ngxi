import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDsCamIcon],svg[arcticons-ds-cam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="33.331" height="26.345" x="4.5" y="10.828" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.28"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m38.04 30.304l3.648 2.106a1.208 1.208 0 0 0 1.812-1.046V16.636a1.208 1.208 0 0 0-1.812-1.046l-3.856 2.226"></svg:path><svg:rect width="21.03" height="5.319" x="10.651" y="17.34" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.66"></svg:rect>`,
})
export class ArcticonsDsCamIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
